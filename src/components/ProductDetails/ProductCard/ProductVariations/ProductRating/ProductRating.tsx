import {FC, useState} from "react"
import {Rating} from "react-simple-star-rating"
import styles from './ProductRating.module.scss'
import {Box} from "@chakra-ui/react"
import {IProductDetails} from "types"

type ProductRating = IProductDetails

export const ProductRating: FC<ProductRating> = ({product}) => {
    const [rating] = useState(Math.round(product.reviews.reduce((acc, rating) => acc + rating.rating, 0) / product.reviews.length) || 0)


    return (
        <Box className={styles.rating}>
            <Box as="span">
                Review:
            </Box>
            <Rating
                transition
                allowFraction
                readonly
                initialValue={rating}
                size={30}
                SVGstyle={{
                    display: 'inline-block',
                }}
            />
        </Box>
    )
}


