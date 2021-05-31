import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {checkUniqueItems} from "../../services/checkUniqueItems";


const CartPage = () => {
    const items = useSelector(state => state.trashData.items)

    return (
        <ul>
            {items.map(item => <li>{item.name}</li>)}
        </ul>
    )
}
export default CartPage