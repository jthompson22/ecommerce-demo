import EventGrid from '@/components/EventGrid'
import Header from '@/components/Header'
import Image from 'next/image'
import {getEvents} from '@/lib/events'
import { Suspense } from 'react'
import Loading from './loading'

async function Events(){
  const events = await getEvents()
  return <EventGrid events={events}/>
}

export default async function ListEvent() {
  return (
    <>
    <main className="flex flex-col justify-between p-4">
          <div className="py-4 px-4  max-w-screen-xl lg:py-8 lg:px-6 text-center">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">List of Events</h2>
          </div>
          <div className=" px-4  max-w-screen-xl  lg:px-6 ">
          <Suspense fallback={<Loading/>}>
            <Events />
          </Suspense>
          </div>
    </main>
    </>
  )
}
