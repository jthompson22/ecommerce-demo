import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Chat from "@/components/Chat"
export default function ChatPage() {
    return (
        <>
            <div className="flex h-screen w-full flex-col">

                <div className="flex-1 bg-gray-100 dark:bg-gray-900">
                    <div className="container mx-auto grid h-full grid-cols-[300px_1fr] gap-8 p-8">
                        <div className="bg-white p-6 shadow dark:bg-gray-800">
                            <h2 className="mb-4 text-lg font-bold">Chat with us!</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium">Capabilities</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Our AI assistant can help you pick out the perfect product, answer questions about our services, and provide you with gift suggestions
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium">How to Use</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Simply type your question or request in the chat box and press send. The AI will respond with helpful
                                        information.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Chat />
                    </div>
                </div>
            </div>
        </>
    )
}

