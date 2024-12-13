import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Categorias from './components/Categories'
import AddProduct from './components/AddProduct'
import Clients from './components/Clients'
import Products from './components/Products'
import AddClient from './components/AddClient'
import AddCategory from './components/AddCategory'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <header className='container mx-auto flex'>
        <h1 className='font-bold w-full text-5xl'>Delizia Gourtmet</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/add-category' element={<AddCategory />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/clientes' element={<Clients />} />
        <Route path='/add-client' element={<AddClient />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
