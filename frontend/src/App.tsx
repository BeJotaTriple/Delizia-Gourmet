import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Categorias from './components/Categories'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct';
import Clients from './components/Clients'
import Products from './components/Products'
import AddClient from './components/AddClient'
import EditClient from "./components/EditClient";
import AddCategory from './components/AddCategory';
import EditCategory from './components/EditCategory';
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router basename="/Delizia-Gourmet">  
      <header className='container mx-auto flex'>
        <h1 className='font-bold w-full text-5xl'>Delizia Gourtmet</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to ='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/add-category' element={<AddCategory />} />
        <Route path="/edit-category/:id" element={<EditCategory />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/clientes' element={<Clients />} />
        <Route path='/add-client' element={<AddClient />} />
        <Route path="/edit-client/:id" element={<EditClient />} />
        <Route path='/products' element={<Products />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
