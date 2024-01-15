import Header from '@/components/Header'
import Image from 'next/image'
import {Event} from '@/lib/types'
import {getEvent} from '@/lib/events'
import { Button } from "@/components/ui/button"
import JoinEventButton from '@/components/JoinEventButton'

export  default async function Event(slug: any) {
  const event : Event= await getEvent(slug.params.slug)
  return (
    <>
    <main className="flex flex-row justify-between ">
      <div className="basis-1/2 h-full p-6  flex justify-center">
          <Image src={event.imageURL} alt={event.name} width={400} height={600}  />
      </div>
      <div className="basis-1/2 h-full p-6">
        <p className="text-2xl">{event.name}</p>
        <p className="text-1xl mt-3 mb-3">{event.description}</p>
        <p className="text-right">
          <JoinEventButton event={{slug:event.slug, numPeople:event.numPeople}}/>
        </p>
      </div>
    </main>
    </>
  )
}
