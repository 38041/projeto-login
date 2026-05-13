import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Loign from './pages/Loign'
import Usuarios from './pages/Usuarios'
import Listagem from './pages/Listagem'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Loign</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/listagem">Listagem</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Loign />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
