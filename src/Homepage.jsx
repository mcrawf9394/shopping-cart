import { useEffect } from "react"
import { useState } from "react"
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
    return <div className="grid grid-cols-4 grid-rows-5 m-10 gap-4">
        {items.map((item) =>{
            if (item === "loading") {
                return <>
                    <h3>loading</h3>
                </>
            }
            else {
                return <div>
                    <img src={item.image} alt="photo of product" className="size-20"/>
                    <h4>{item.title}</h4>
                    <h5>{item.price}</h5>
                </div>
            }
        })}
    </div>
}