import Image from "next/image";
import logoImg from "@/public/logo.png";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";

export default function ShoppingCarouselBlock(product: Product) {
    return (
        <Card>
            <div className="relative w-full h-">
                <Image
                    src={product.imageurl}
                    alt={product.name}
                    height={452}
                    width={681}
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                />
            </div>
            <CardHeader className="pb-1">
                <CardTitle className=" font-normal text-lg">{product.name}</CardTitle>
                <CardDescription>${product.cost}</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
                <p className="text-xs">{product.description.substring(0, 250)}</p>
            </CardContent>
            <CardFooter className="flex flex-row-reverse">
                <Button className="" asChild>
                    <Link className="text-xs" href={`/products/${product.id}`}>View </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
