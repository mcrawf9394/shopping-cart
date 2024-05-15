import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Item } from "./Item.jsx"
export default function Homepage () {
    const [items, setItems] = useState(["loading"])
    useEffect(() => {
        const itemSource = async function () {
            let source = await fetch('https://fakestoreapi.com/products')
            let info = await source.json()
            setItems(info)
        }
        itemSource ()
    }, [])
    return <div className="grid grid-cols-4 grid-rows-5 m-5 gap-7">
        {items.map((item) =>{
            if (item === "loading") {
                return <>
                    <h3>loading</h3>
                </>
            }
            else {
                return <Link to={Item}>
                    <img src={item.image} alt="photo of product" className="h-40 w-10/12 ml-5"/>
                    <h4>{item.title}</h4>
                    <h5>{item.price}</h5>
                </Link>
            }
        })}
    </div>
}