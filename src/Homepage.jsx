import { useEffect } from "react"
import { useState } from "react"
import { currentCart } from "./Shopping-Cart-Page"
export default function Homepage () {
    const [items, setItems] = useState(["loading"])
    useEffect(() => {
        const itemSource = async function () {
            let source = await fetch('https://fakestoreapi.com/products')
            let info = await source.json()
            console.log(info)
            setItems(info)
        }
        itemSource ()
    }, [])
    return <div className="grid grid-cols-4 grid-rows-5 m-5 gap-7">
        {items.map((item) =>{
            if (item === "loading") {
                return <>
                    <h3 className="col-span-4 row-span-5 my-16 text-center text-8xl">Loading...</h3>
                </>
            }
            else {
                return <>
                    <dialog id={item.title}>
                        <img src={item.image}/>
                        <h4>{item.title}</h4>
                        <h5>{item.price}</h5>
                        <h4>{item.description}</h4>
                        <button onClick={(click) => {
                            click.preventDefault()
                            let popUp = document.getElementById(item.title)
                            popUp.close()
                        }}>Go Back</button>
                        <button onClick={(click) => {
                            click.preventDefault()
                            let popUp = document.getElementById(item.title)
                            popUp.close()
                            currentCart.items.push(item)
                        }}>Add to Cart</button>
                    </dialog>
                <button onClick={(click) => {
                    click.preventDefault()
                    let popUp = document.getElementById(item.title)
                    popUp.showModal()
                }}>
                    <img src={item.image} alt="photo of product" className="h-40 w-10/12 ml-5"/>
                    <h4>{item.title}</h4>
                    <h5>${item.price}</h5>
                </button>
            </>
            }
        })}
    </div>
}