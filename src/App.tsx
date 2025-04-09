
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Analytics from './pages/Analytics'
import Dashboard from './pages/Dashboard'
import Tables from './pages/Tables'

function App() {


  return (
    <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ width: '20%', backgroundColor: '#111', color: 'white' }}>
      <Navbar />
    </div>
    <div style={{ width: '80%', backgroundColor: '#1a1a1a', color: 'white', padding: '1rem' }}>
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
