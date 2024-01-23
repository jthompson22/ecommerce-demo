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
import {Product} from "@/lib/types"

export default function ProductBlock(product: Product) {
    return (
        <Card>
             <div className='relative w-full h-'>
                <Image src={product.imageurl}  alt={product.name} height={452} width={681} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="/>
                </div>
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>${product.cost} </CardDescription>
            </CardHeader>
            <CardContent>
                <p>{product.description.substring(0, 250)}...</p>
            </CardContent>
            <CardFooter className="flex flex-row-reverse">
                <Button asChild>
                <Link href={`/products/${product.id}`}>
                     View Details
                </Link>
                </Button>
            </CardFooter>
        </Card>
    )
  }
  