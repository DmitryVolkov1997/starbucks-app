import {Box, Input} from '@chakra-ui/react'
import cn from 'classnames'
import {DetailedHTMLProps, FC, HTMLAttributes} from 'react'
import {VscSearch} from 'react-icons/vsc'
import styles from './Search.module.scss'
import {RootState, useAppDispatch} from "store.ts"
import {setSearch} from "features"
import {useSelector} from "react-redux"

type ISearch = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Search: FC<ISearch> = ({className}) => {
    const dispatch = useAppDispatch()
    const searchTerm = useSelector((state: RootState) => state.carousel.search)

    return (
        <Box className={cn(styles.search, className)}>
            <Input
                type="search"
                placeholder="search"
                variant="flushed"
                value={searchTerm}
                onChange={e => dispatch(setSearch(e.target.value))}
            />

            <VscSearch className={styles.icon} size={23} color="lightgray"/>
        </Box>
    )
}

