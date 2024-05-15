import { Link, Outlet } from 'react-router-dom'
function App() {
  return ( <div>
    <nav className='grid grid-cols-3 grid-rows-1 items-center bg-indigo-500 py-5'>
      <h1 className='text-5xl text-center'>Mock Shop</h1>
      <Link to="store" className='text-2xl hover:text-white text-center'>Store</Link>
      <Link to="cart"className='text-2xl hover:text-white text-center'>Shopping Cart</Link>
    </nav>
    <Outlet />
    </div>
  )
}

export default App
