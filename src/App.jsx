import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  return ( <>
    <h1 className='text-5xl'>Mock Shop</h1>
    <nav>
      <Link to="store">Store</Link>
      <Link to="cart">Shopping Cart</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default App
