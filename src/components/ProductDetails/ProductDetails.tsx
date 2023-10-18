import {Box} from "@chakra-ui/react"
import {FC} from "react"
import styles from "./ProductDetails.module.scss"
import {Catalog, Heading, ProductBreadcrumbs, ProductCard, ProductNavigation} from "components"
import {IProductDetails} from "types"
import {products} from "../../data/product.data.ts"


export const ProductDetails: FC<IProductDetails> = ({product}) => {
    return (
        <Box className={styles.details}>
            <Box className="flex items-center justify-between">
                {product && (
                    <ProductBreadcrumbs product={product}/>
                )}
                <Box className="flex justify-end">
                    <Heading className="text-center">
                        Product Details
                    </Heading>
                </Box>

                {product && (
                    <ProductNavigation
                        productId={product.id}
                    />
                )}
            </Box>

            <ProductCard product={product}/>

            <Catalog products={products}/>
        </Box>
    )
}

