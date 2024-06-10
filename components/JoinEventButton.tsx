"use client"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import axios from 'axios'
import { revalidatePath } from 'next/cache'
import { useFormStatus } from "react-dom"

export default function JoinEventButton({ event }: { event: any }) {
    const [isJoined, setIsJoined] = useState(false)
    const [joinText, setJoinText] = useState("Join Event")
    const joinEvent = async (formData: FormData) => {
        setIsJoined(true)
        event.numPeople++


    }

    return (

        <>
            <p className="my-3">{event.numPeople} <span role="img" aria-label="people">👥</span></p>
            {isJoined ?
                <Button variant="outline" className="bg-green-700 font-white">Event Joined</Button>
                :
                (<>
                    <form action={joinEvent}>
                        <input type="hidden" value={event.slug} name="slug" id="slug" />
                        <Button type="submit" className="bg-sky-700" >Join Event</Button>
                    </form>
                </>)}
        </>
    )
}

//   onClick={()=>{joinEvent(event.slug);}}