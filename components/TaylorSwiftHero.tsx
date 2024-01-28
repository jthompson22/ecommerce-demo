import Link from "next/link";
import { Button } from "./ui/button";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { ProductTable } from "@/lib/products";
import { ilike, like } from "drizzle-orm";

export default async function TaylorSwiftHero() {
  const getTaylorID = async () => {
    const db = drizzle(sql);
    const selectResult = await db
      .select()
      .from(ProductTable)
      .where(ilike(ProductTable.name, "%taylor swift%"));
    if (selectResult.length > 0) {
      return selectResult[0].id;
    } else {
      return 3;
    }
  };

  const taylorID = await getTaylorID();
  return (
    <>
      <div className="w-1/2 h-80 bg-[url('/taylor.jpg')] bg-cover bg-left bg-no-repeat ">
        <div className="p-6 mt-20">
          <p className=" w-1/2 p-2 text-2xl text-white font-extrabold text-shadow bg-teal-600 inline-block">
            Calling all Taylor Swift Fans
          </p>
          <div className="w-full">
            <p className="w-1/2  p-2 mt-4 pb-4 text-l text-white  text-shadow bg-teal-600 inline-block">
                Say Farewell with Exclusive Gear from Concerts R Us
            </p>
          </div>
          
          <div className="w-full mt-3">
            <Link href={`/products/${taylorID}`}>
              <Button className="w-1/4 bg-sky-700">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
