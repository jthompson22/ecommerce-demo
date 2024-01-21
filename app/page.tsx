import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import heroImg from '@/public/hero.jpg'
import { getHeroContent } from '@/lib/contentful'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

async function GetContentful(){
  const heroContent = await getHeroContent()
  return <span className="text-shadow">{heroContent}</span>
}

export  default async function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between bg-stone-100 bg-[url('/hero.jpg')] bg-cover bg-top bg-no-repeat h-10">
       <div className="flex flex-wrap min-w-full">
        <div className="flex items-center min-w-full p-48">
          <div className="mb-8">
          <p className="py-5 text-xl leading-normal text-white text-shadow  ">
              YOUR FAVOURITE CONCERT GEAR STORE
            </p>
            <h1 className="text-4xl w-max font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Concerts R Us
            </h1>
            <Suspense fallback={<Skeleton className=" w-[400px] h-[20px] my-5   bg-slate-100"  />} >
            <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl ">
              <GetContentful />
            </p>
            </Suspense>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row justify-start">
              <Link
                href="/products"
                className="px-8 py-4 text-md font-medium text-center text-white bg-teal-600 rounded-md " >
                Shop for gear!
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div> */}
      </div>
      
      
    </main>
    </>
  )
}
