import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3" >
            <div className="basis-1/3 h-full p-6  ">
            <Skeleton className=" h-[400px]  bg-slate-100" />
          </div>
          <div className="basis-1/3 h-full p-6">
            <Skeleton className=" h-[400px]  bg-slate-100" />
          </div>
          <div className="basis-1/3 h-full p-6">
            <Skeleton className="h-[400px]  bg-slate-100" />
          </div>
        </div>   
        </>
  )
}
