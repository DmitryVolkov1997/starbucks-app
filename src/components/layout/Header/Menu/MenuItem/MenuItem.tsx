import {FC} from 'react'
import {Link} from 'react-router-dom'
import {IMenuLink} from './menu-item.interface'

interface IMenuItem {
    item: IMenuLink
}

const MenuItem: FC<IMenuItem> = ({item}) => {
    return (
        <li>
            <Link to={item.link}>{item.name}</Link>
        </li>
    )
}

export default MenuItem
