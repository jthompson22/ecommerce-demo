import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText, StreamData, convertToCoreMessages, tool } from 'ai';
import { z } from 'zod';
import { createResource } from '@/lib/actions';
import { findRelevantContent } from '@/lib/ai/embedding';
import { vectordb } from "@/lib/db";
// Allow streaming responses up to 30 seconds
import { resources } from '@/lib/db/schema/resources';
import { streamUI } from 'ai/rsc';
import ChatShoppingBlock from '@/components/ChatShoppingBlock'
import { eq, ne, gt, gte, ConsoleLogWriter } from "drizzle-orm";
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: openai('gpt-3.5-turbo'),
        system: `You are a helpful assistant. Check your knowledge base before answering any questions.
        Only respond to questions using information from tool calls.
        if no relevant information is found in the tool calls, respond, just continue the conversation.
        You will be mainly recommending products to our users based on the color of the product.`,
        messages: convertToCoreMessages(messages),
        tools: {
            getInformation: tool({
                description: `get information from your knowledge base to answer questions.`,
                parameters: z.object({
                    question: z.string().describe('the users question'),
                }),
                execute: async ({ question }: { question: any }) => {
                    const data = await findRelevantContent(question)
                    const resourceId = data[0].resourceId ? data[0].resourceId : ''
                    const [resource] = await vectordb
                        .select({ productName: resources.productName, price: resources.price, imageUrl: resources.imageUrl, productId: resources.productId })
                        .from(resources)
                        .where(eq(resources.id, resourceId))
                    return `${resource.productName} is available for ${resource.price} and can be found at <a href="/products/${resource.productId}">here</a>`
                }
                ,
            }),
        },
    });



    return result.toAIStreamResponse();
}