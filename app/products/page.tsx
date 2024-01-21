import ShoppingGrid from '@/components/ShoppingGrid'
import Header from '@/components/Header'
import Image from 'next/image'
import {getEvents} from '@/lib/events'
import { Suspense } from 'react'
import Loading from './loading'
export const revalidate = 60
async function Events(){
  const events = await getEvents()
  return <ShoppingGrid events={events}/>
}

export default async function ListEvent() {
  return (
    <>
    <main className="flex min-h-56 flex-col  justify-between bg-stone-100 bg-[url('/concert.jpg')] bg-cover bg-top bg-no-repeat h-10">
    <h2 className="mb-4 text-4xl tracking-tight p-24 text-white dark:text-black">New Arrivals</h2>
    </main>

    <main className="flex flex-col justify-between p-4 ">
          <div className="py-4 px-4  max-w-screen-xl lg:py-8 lg:px-6 ">
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
