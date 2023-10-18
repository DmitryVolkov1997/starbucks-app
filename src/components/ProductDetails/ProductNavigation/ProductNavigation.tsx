import {FC} from "react"
import {Box} from "@chakra-ui/react"
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import styles from './ProductNavigation.module.scss'
import {useProductNavigation} from "./useProductNavigation.ts"
import {Link} from "react-router-dom"
import cn from "classnames"

interface ProductNavigation {
    productId: number
}

export const ProductNavigation: FC<ProductNavigation> = ({productId}) => {
    const {nextProductSlug, prevProductSlug} = useProductNavigation(productId)

    console.log(nextProductSlug)

    return (
        <Box className={styles.navigation}>
            <Box>Next Product</Box>
            <Box className={styles.row}>
                <Link className={cn({
                    [styles.prevDisabled]: !prevProductSlug
                })} to={`/product/${prevProductSlug}`}>
                    <BsArrowLeft/>
                </Link>

                <Link className={cn({
                    [styles.nextDisabled]: !nextProductSlug
                })} to={`/product/${nextProductSlug}`}>
                    <BsArrowRight/>
                </Link>
            </Box>
        </Box>
    )
}



