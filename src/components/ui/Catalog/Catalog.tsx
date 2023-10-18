import {Box} from '@chakra-ui/react'
import {FC, useEffect, useState} from 'react'
import {IProduct} from 'types'
import {Sorting} from './Sorting/Sorting'
import {sortingData} from './Sorting/sorting.data'
import {Carousel} from 'components'

interface ICatalog {
    products: IProduct[]
}

export const Catalog: FC<ICatalog> = ({products}) => {
    const [items, setItems] = useState(products)

    useEffect(() => {
        setItems(products)
    }, [products])

    return (
        <Box>
            <Box className="flex justify-end mt-20">
                <Sorting
                    className="max-w-xs w-full"
                    list={sortingData}
                />
            </Box>

            <Carousel products={items}/>
        </Box>
    )
}

