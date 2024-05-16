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
        <div className="grid grid-cols-5 w-12/12">
            {currentCart.items.map((item) => {
                return <>
                    <img src={item.image} alt="picture of item" className="size-40"/>
                    <h4 className="mt-16">{item.title}</h4>
                    <h4 className="mt-16">{item.price}</h4>
                    <button>Remove</button>
                    <button>Add</button>
                </>
            })}
        </div>
        <h3 className="text-center">Total Before Taxes = ${currentCart.findTotal()}</h3>
    </>
    }
}