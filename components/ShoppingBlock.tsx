import Image from 'next/image'
import logoImg from '@/public/logo.png'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Event} from "@/lib/types"

export default function EventBlock(event: Event) {
    return (
        <Card>
             <div className='relative w-full h-48'>
                <Image src={event.imageURL}  alt={event.name} fill/>
                </div>
            <CardHeader>
                <CardTitle>{event.name}</CardTitle>
                <CardDescription>{event.restaurant.foodType}</CardDescription>
                <CardDescription>{event.numPeople} <span role="img" aria-label="people">👥</span></CardDescription>
            </CardHeader>
            <CardContent>
                <p>{event.description.substring(0, 250)}...</p>
            </CardContent>
            <CardFooter className="flex flex-row-reverse">
                <Button asChild>
                <Link href={`/events/${event.slug}`}>
                     More
                </Link>
                </Button>
            </CardFooter>
        </Card>
    )
  }
  