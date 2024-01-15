import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  
    return (
      <>
         <main className="flex flex-row justify-between ">
      <div className="basis-1/2 h-full p-6  flex justify-center">
        <Skeleton className="w-[400px] h-[400px]  bg-slate-100" />
      </div>
      <div className="basis-1/2 h-full p-6">
        <Skeleton className=" h-[400px]  bg-slate-100" />
      </div>
    </main>
      </>
    )
  }
  