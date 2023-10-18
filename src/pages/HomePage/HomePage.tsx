import {Box} from '@chakra-ui/react'
import {Catalog, Header, Heading, Layout} from 'components'
import {products} from 'data/product.data'
import {useEffect} from "react"
import {RootState, useAppDispatch} from "store.ts"
import {useSelector} from "react-redux"
import {setProducts, visibleAllProducts} from "features"


export const HomePage = () => {
    const dispatch = useAppDispatch()
    const {sortType, search} = useSelector((state: RootState) => state.carousel)
    const productElems = useSelector((state: RootState) => visibleAllProducts(state, {search, sortType}))

    useEffect(() => {
        dispatch(setProducts(products))
    }, [dispatch])

    return (
        <Layout>
            <Header/>
            <Box className="w-full flex justify-end">
                <Heading className="text-right">
                    The happiest hour of the year
                </Heading>
            </Box>

            {
                productElems && (
                    <Catalog products={productElems}/>
                )
            }
        </Layout>
    )
}

