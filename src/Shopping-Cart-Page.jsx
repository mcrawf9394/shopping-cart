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
            total = total + price
            i++
        }
        total = dollarDisplay(total)
        return total
    },
}
export { currentCart }
export default function Cart () {
    if (currentCart.items.length === 0) {
        return <>
            <h2 className="text-center text-8xl mt-16">Your Cart is empty</h2>
            <p className="text-center text-4xl mt-16">Let's head to the Store!</p>
        </>
    }
    else {
    return <>
        <div className="grid grid-cols-1 grid-rows-1 auto-rows-auto w-11/12 mx-auto gap-2 mt-2">
            {currentCart.items.map((item) => {
                return <div className="grid grid-cols-5 w-10/12 mx-auto text-center border-solid border-black border-4">
                    <img src={item.image} alt="picture of item" className="size-40"/>
                    <h4 className="self-center">{item.title}</h4>
                    <h4 className="self-center">${dollarDisplay(item.price)}</h4>
                    <button onClick={()=>{}}>Remove</button>
                    <button onClick={()=>{}}>Add</button>
                </div>
            })}
        </div>
        <h3 className="text-center mb-20">Total Before Taxes = ${currentCart.findTotal()}</h3>
    </>
    }
}