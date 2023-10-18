import {useParams} from "react-router-dom"
import {products} from "data/product.data.ts"
import {useEffect, useState} from "react"
import {IProduct} from "types"
import {Header, Layout, ProductDetails} from "components"

export const ProductDetailsPage = () => {
    const {slug} = useParams()
    const [product, setProduct] = useState<IProduct | null>(null)

    useEffect(() => {
        if (slug !== undefined) {
            const findProduct = products.find((product) => product.slug === slug)

            if (findProduct) {
                setProduct(findProduct)
            }
        }
    }, [slug])

    return (
        <Layout>
            <Header/>

            {product && (
                <ProductDetails product={product}/>
            )}
        </Layout>
    )
}

