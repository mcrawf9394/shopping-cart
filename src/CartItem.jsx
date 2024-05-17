import { useState } from "react"
import { currentCart } from "./Shopping-Cart-Page"
import { document } from "postcss"
function dollarDisplay (num) {
    return Number.parseFloat(num).toFixed(2)
}
export default function CartItem ({item}) {
    const [quan, setQuan] = useState (item.q)
    return <>
                    <img src={item.image} alt="picture of item" className="size-40"/>
                    <h4 className="self-center">{item.title}</h4>
                    <h4 className="self-center">${dollarDisplay(item.price)}</h4>
                    <label className="self-center">Quantity</label>
                    <input id={item.title} type="number" min="1" max="10" value={quan} onChange={(change) => {setQuan(change.target.value)}} className="border-solid border-black border-2"/>
                </>
}