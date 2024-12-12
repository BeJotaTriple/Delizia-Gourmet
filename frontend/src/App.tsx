import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Categorias from './components/Categories'
import AddProduct from './components/AddProduct'
import Clients from './components/Clients'
import Products from './components/Products'
import AddClient from './components/AddClient'

function App() {
  return (
    <Router>
      <header className='container mx-auto flex'>
        <h1 className='font-bold w-full'>Delizia Gourtmet</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/clientes' element={<Clients />} />
        <Route path='/add-client' element={<AddClient />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
