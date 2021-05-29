import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {checkUniqueItems} from "../../services/checkUniqueItems";


const CartPage = () => {
    const [newItems, setNewItems] = useState([])
    const items = useSelector(state => state.trashData.items)

    useEffect(() => {
        setNewItems(checkUniqueItems(items))
    }, [items])

    return (
        <ul>
            {newItems.map(item => <li>{item.name}</li>)}
        </ul>
    )
}
export default CartPage