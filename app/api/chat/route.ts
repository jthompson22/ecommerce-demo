import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText, StreamData } from 'ai';
import { z } from 'zod';
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: openai('gpt-3.5-turbo'),
        tools: {
            // server-side tool with execute function:
            getProductInformation: {
                description: 'Recommend a product based on the user input',
                parameters: z.object({ color: z.string() }),
                execute: async ({ }: { color: string }) => {
                    const weatherOptions = ['yellow', 'red', 'white', 'black', 'blue'];
                    return weatherOptions[
                        Math.floor(Math.random() * weatherOptions.length)
                    ];
                },
            }
        },
        messages,
    });
    const data = new StreamData();


    const stream = result.toAIStream({
        onFinal(_) {
            data.close();
        },
    });

    return new StreamingTextResponse(stream, {}, data);

}