"use client"
import { Button } from "@/components/ui/button"
import {useState} from 'react'
import axios from 'axios'
import {joinEventServerAction} from "@/lib/actions"
import { revalidatePath } from 'next/cache'
import { useFormStatus } from "react-dom"

export default  function AddProductSubmit() {
    const {pending} = useFormStatus()
    return (
        <>
            {pending?
                <Button variant="outline" className="bg-green-700 font-white float-right mt-2">Adding Product</Button>
                :
                (<>
                <Button type="submit" className="bg-sky-700 float-right mt-2" >Add Product</Button>
            </>)}
        </>
    )
  }
