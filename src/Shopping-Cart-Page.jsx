import { useState } from "react"
function dollarDisplay (num) {
    return Number.parseFloat(num).toFixed(2)
}
const currentCart = {
    items: [],
    findTotal () {
        let i = 0
        let total = 0
        while (i < this.items.length) {
            let price = this.items[i].price
            if (this.items[i].q > 1) {
                price = price * this.items[i].q
            }
            total = total + price
            i++
        }
        total = dollarDisplay(total)
        return total
    },
}
export { currentCart }
import CartItem from "./CartItem"
import Checkout from "./Checkout"
export default function Cart () {
    const [display, setDisplay] = useState (currentCart.items)
    if (currentCart.items.length === 0) {
        return <>
            <h2 className="text-center text-8xl mt-16">Your Cart is empty</h2>
            <p className="text-center text-4xl mt-16">Let's head to the Store!</p>
        </>
    }
    else {
    return <>
        <div className="grid grid-cols-1 grid-rows-1 auto-rows-auto w-11/12 mx-auto gap-2 mt-2">
            {display.map((item) => {
                return  <div className="grid grid-cols-7 w-10/12 mx-auto text-center border-solid border-black border-4"> 
                <CartItem item={item} />
                <button onClick={(click) => {
                    click.preventDefault()
                    let index = currentCart.items.indexOf(item)
                    currentCart.items[index].q = document.getElementById(item.title).value
                    let newArray = currentCart.items.slice(0, currentCart.items.length)
                    setDisplay(newArray)
                }}>Add</button>
                  <button onClick={(click) => {
                        click.preventDefault()
                        currentCart.items.splice(currentCart.items.indexOf(item), 1)
                        let newArray = currentCart.items.slice(0, currentCart.items.length)
                        setDisplay(newArray)
                    }}>Remove</button>
                </div>
            })}
        </div>
        <h3 className="text-center">Total Before Taxes = ${currentCart.findTotal()}</h3>
        <form className="mb-20" action="">
                <label htmlFor="zip">Zip Code</label>
                <input id="zip" type="number" minLength="5" className="border-black border-2 border-solid"/>
                <button onClick={(click) => {
                    click.preventDefault()
                    let popUp = document.querySelector('dialog')
                    popUp.showModal()
                }}>Submit</button>
        </form>
        <Checkout />
    </>
    }
}