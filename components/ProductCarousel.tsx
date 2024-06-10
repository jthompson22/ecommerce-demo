import ShoppingBlock from '@/components/ShoppingBlock'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ShoppingCarouselBlock from './ShoppingCarouselBlock'
export default function ShoppingGrid({ products }: { products: Array<any> }) {
    return (
        <>
            <Carousel className='w-2/3 '>
                <CarouselContent>
                    {
                        products.map(product => (
                            <div key={product._id}>
                                <CarouselItem className="basis-1/3">
                                    <ShoppingCarouselBlock {...product} />
                                </CarouselItem>
                            </div>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}