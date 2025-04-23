
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Analytics from './pages/Analytics'
import Dashboard from './pages/Dashboard'
import Tables from './pages/Tables'

function App() {


  return (
    <div style={{ display: 'flex', height: '100vh',   backgroundColor: '#F9F4CC' }}>
    <div style={{ width: '20%', background: 'linear-gradient(to bottom left, #000000 20%, #1a0013 60%, #330026 90%)', color: 'white' }}>
      <Navbar />
    </div>
    <div style={{ width: '80%', backgroundColor: 'transparent', color: 'white', padding: '1rem' }}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/tables" element={<Tables />} />
      </Routes>
    </div>
  </div>
  )
}

export default App
