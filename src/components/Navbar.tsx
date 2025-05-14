import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <motion.nav 
    initial={{opacity: 0, x: -100}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: -100}}
    transition={{duration: 0.5}}
    className='flex flex-col p-4 gap-4 text-black'>
    <h2 className="text-3xl">Equilibrium</h2>
    <hr className="border-gray-400" />
    <Link to="/" 
    className="text-black text-xl hover:text-gray-200 hover:underline hover:bg-neutral-500/40  decoration-neutral-200 transition-all w-full py-2 px-2"
    >Dashboard</Link>

    <Link to="/analytics" 
    className="text-black text-xl hover:text-gray-200 hover:underline hover:bg-neutral-500/40  decoration-neutral-200 transition-all py-2 px-2"
    >Analytics</Link>

    <Link to="/tables" 
    className="text-black text-xl hover:text-gray-200 hover:underline hover:bg-neutral-500/40 decoration-neutral-200 transition-all py-2 px-2"
    >Tables</Link>
  </motion.nav>
  )
}

export default Navbar
