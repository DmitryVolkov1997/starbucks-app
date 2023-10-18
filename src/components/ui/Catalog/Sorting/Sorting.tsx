import cn from 'classnames'
import {DetailedHTMLProps, FC, HTMLAttributes,} from 'react'
import Select from 'react-select'
import {ISortingItem} from './sorting.interface'
import {useAppDispatch} from "store.ts"
import {setSortType} from "features/carousel/carousel-slice.ts"

interface ISorting
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLOptionElement>,
        HTMLOptionElement
    > {
    list: ISortingItem[]
}

export const Sorting: FC<ISorting> = ({list, className}) => {
    const dispatch = useAppDispatch()

    return (
        <Select
            className={cn(className)}
            options={list}
            placeholder="Default sorting"
            onChange={val => {
                if (val) dispatch(setSortType(val.value))
            }}
            isClearable
            styles={{
                control: baseStyles => ({
                    ...baseStyles,
                    borderColor: '#E8E7E3',
                    borderWidth: '2px',
                    transitionDelay: '400',
                }),
            }}
        />
    )
}
