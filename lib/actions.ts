'use server'

import {createDBClient} from "@/lib/db"
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
const { MongoClient, ServerApiVersion } = require('mongodb');
export async function joinEvent(slug:string){
    const dbClient = createDBClient()
    try {
      const database = dbClient.db('foodiefind');
      const events = database.collection('event');
      await dbClient.connect();
      await events.updateOne({'slug':slug},{$inc:{numPeople:1}})
    } finally {
      // Ensures that the client will close when you finish/error
      await dbClient.close();
    }
    return {isJoined:true}
  }
export async function  joinEventServerAction (formData:FormData)  {
    const slug : any = formData.get('slug')
    joinEvent(slug)
    //   revalidate paths
    revalidatePath(`/events/${slug}`)
    revalidatePath(`/events`)
    redirect(`/events/${slug}`)
}