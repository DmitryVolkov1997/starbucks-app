import {FC} from "react"
import {Box, Image} from "@chakra-ui/react"
import {IProductDetails} from "types"
import {formatToCurrency} from "utils/format-to-currency.ts"
import styles from './ProductImage.module.scss'

interface IProductImage extends IProductDetails {
    currentImageIndex: number
}

export const ProductImage: FC<IProductImage> = (
    {product, currentImageIndex}
) => {
    return (
        <Box className={styles.image}>
            <Box className={styles.main}>
                <Image src={product.images[currentImageIndex]} alt={product.name}/>
            </Box>

            <Box className={styles.price}>
                {formatToCurrency(product.price)}
            </Box>
        </Box>
    )
}


