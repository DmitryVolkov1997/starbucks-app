import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { ICartItem } from 'types'
import { formatToCurrency } from 'utils/format-to-currency'
import styles from './CartItem.module.scss'
import { CartActions } from 'components'

export const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<Box className={styles.item}>
			<img
				className={styles.img}
				src={item.product.images[0]}
				alt={item.product.name}
			/>

			<Box>
				<Box className={styles.name}>
					{item.product.name}
				</Box>
				<Box className={styles.price}>
					{formatToCurrency(item.product.price)}
				</Box>
				<Box className={styles.variation}>
					{item.size}
				</Box>
				<CartActions item={item} />
			</Box>
		</Box>
	)
}
