import { useEffect } from "react"
import { useState } from "react"
import { currentCart } from "./Shopping-Cart-Page"
export default function Homepage () {
    const [items, setItems] = useState(["loading"])
    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        const itemSource = async function () {
            let source = await fetch('https://fakestoreapi.com/products')
            let info = await source.json()
            setItems(info)
        }
        itemSource ()
    }, [])
    function dollarDisplay (num) {
        return Number.parseFloat(num).toFixed(2)
    }
    return <div className="grid grid-cols-4 grid-rows-5 m-5 gap-7">
        {items.map((item) =>{
            if (item === "loading") {
                return <>
                    <h3 className="col-span-4 row-span-5 my-16 text-center text-8xl">Loading...</h3>
                </>
            }
            else {
                return <>
                    <dialog id={item.title} className="w-10/12 h-4/6 justify-self-center border-black border-solid border-4 rounded-2xl">
                        <div className="grid grid-cols-3 grid-rows-2 h-5/6">
                            <img src={item.image} className="h-40 w-40 col-span-1 row-span-2 justify-self-center self-center"/>
                            <div className="col-span-2">
                                <h4 className="my-8 border-b-4 border-b-solid border-b-black self-baseline">{item.title} - ${dollarDisplay(item.price)}</h4>
                                <p className="overflow-scroll">{item.description}</p>
                            </div>
                        </div>
                        <div className="inline-flex justify-center space-x-4 w-full">
                            <button onClick={(click) => {
                                click.preventDefault()
                                let popUp = document.getElementById(item.title)
                                popUp.close()
                            }}>Go Back</button>
                            <label htmlFor="input">Quantity</label>
                            <input id="input" type="number" min="1" max="10" value={quantity} onChange={(change) => {setQuantity(change.target.value)}} className="border-black border-solid border-2"/>
                            <button onClick={(click) => {
                                click.preventDefault()
                                let popUp = document.getElementById(item.title)
                                item.q = quantity
                                console.log(item.q)
                                popUp.close()
                                currentCart.items.push(item)
                            }}>Add to Cart</button>
                        </div>
                    </dialog>
                <button onClick={(click) => {
                    click.preventDefault()
                    let popUp = document.getElementById(item.title)
                    popUp.showModal()
                }} className="border-solid border-4 border-black hover:scale-110 ease-in-out duration-500 rounded-lg shadow-xl shadow-gray-500">
                    <img src={item.image} alt="photo of product" className="h-40 w-10/12 ml-5"/>
                    <h4>{item.title}</h4>
                    <h5>${dollarDisplay(item.price)}</h5>
                </button>
            </>
            }
        })}
    </div>
}