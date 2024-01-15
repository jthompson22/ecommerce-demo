

import {createDBClient} from "@/lib/db"
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
const { MongoClient, ServerApiVersion } = require('mongodb');
async function findAllEvents(){
    
}


export async function getEvents(){
  // await new Promise((resolve) => setTimeout(resolve,10000))

  const dbClient = createDBClient()

  let results =[]
  try {
      const database = dbClient.db('foodiefind');
      const events = database.collection('event');
      await dbClient.connect()
      results = await events.find().toArray()
    } finally {
      // Ensures that the client will close when you finish/error
      await dbClient.close();
    }
  return results
}

export async function getEvent(slug: string){
  const dbClient = createDBClient()
    // const data = await findSingleEvent(slug)
    let data =[]
    try {
        const database = dbClient.db('foodiefind');
        const events = database.collection('event');
        await dbClient.connect();
        data = await events.findOne({slug:slug})

      } finally {
        // Ensures that the client will close when you finish/error
        await dbClient.close();
      }
      return data
    
}

