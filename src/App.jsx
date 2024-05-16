import { Link, Routes, Route } from 'react-router-dom'
import LandingPage from './Landing-page'
import Homepage from './Homepage'
import Cart from './Shopping-Cart-Page'
import github from './images/github-mark.png'
function App() {
  return ( <div>
    <nav className='grid grid-cols-4 grid-rows-1 items-center bg-indigo-500 py-5 sticky top-0 z-10'>
      <h1 className='text-5xl text-center'>Mock Shop</h1>
      <Link to="/" className='text-2xl hover:text-white text-center'>Home</Link>
      <Link to="store" className='text-2xl hover:text-white text-center'>Store</Link>
      <Link to="cart" className='text-2xl hover:text-white text-center'>Shopping Cart</Link>
    </nav>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='store' element={<Homepage />}/>
      <Route path='cart' element={<Cart />} />
    </Routes>
    <footer className='inline-flex mt-auto fixed bottom-0 justify-center bg-indigo-500 w-full'>
      <h5 className='align-center mr-3'>Project made by Sam Crawford for the Odin Project</h5>
      <a href="https://github.com/mcrawf9394" target='__blank'>
        <button>
        <img className='h-6 w-6' src={github} alt="Link to github" />
        </button>
      </a>
    </footer>
    </div>
  )
}

export default App