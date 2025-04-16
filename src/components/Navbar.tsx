import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex flex-col p-4 gap-4'>
    <h2 className="text-3xl">MoneyFlow</h2>
    <hr className="border-gray-400" />
    <Link to="/" 
    className="text-white text-xl hover:text-gray-200 hover:underline hover:bg-neutral-800  decoration-neutral-200 transition-all w-full py-2 px-2"
    >Dashboard</Link>

    <Link to="/analytics" 
    className="text-white text-xl hover:text-gray-200 hover:underline hover:bg-neutral-800  decoration-neutral-200 transition-all py-2 px-2"
    >Analytics</Link>

    <Link to="/tables" 
    className="text-white text-xl hover:text-gray-200 hover:underline hover:bg-neutral-800 decoration-neutral-200 transition-all py-2 px-2"
    >Tables</Link>
  </nav>
  )
}

export default Navbar
