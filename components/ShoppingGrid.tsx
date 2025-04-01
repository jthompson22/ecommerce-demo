import ShoppingBlock from '@/components/ShoppingBlock'
export default function ShoppingGrid({ products }: { products: Array<any> }) {
    return (
        <>
            <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-3" >
                {
                    products.map(product => (
                        <div key={product._id}>
                            <ShoppingBlock {...product} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}