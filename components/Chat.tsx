'use client';
import { useChat } from '@ai-sdk/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Markdown from 'react-markdown'


export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({ maxToolRoundtrips: 2, });
    return (
        <div className="flex flex-col">
            <div className="flex-1 overflow-auto bg-white p-6 shadow dark:bg-gray-800">
                <div className="space-y-4">
                    {messages.map(m => (
                        <>
                            {
                                m.role === 'user' ?
                                    <div className="flex  flex-row-reverse gap-2">
                                        <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800 [&_a]:text-blue-700">
                                            <Markdown>{m.content}</Markdown>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900 [&_a]:text-blue-700">
                                        <p>
                                            {m.content.length > 0 ? (
                                                <Markdown>{m.content}</Markdown>
                                            ) : (
                                                <span className="italic font-light">
                                                    {'Taking a quick look for you...'}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                            }
                        </>
                    ))}
                </div>
            </div>
            <div className="mt-4   space-x-2">
                <form onSubmit={handleSubmit} className='flex flex-row w-full'>
                    <input
                        className="w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
                        value={input}
                        placeholder="Say something..."
                        onChange={handleInputChange}
                    />
                    <Button type="submit" className="w-1/4">
                        <>
                            <SendIcon className="h-4 w-4" />
                            <span >Send</span>
                        </>

                    </Button>
                </form>

            </div>
        </div>
    )
}

function SendIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}