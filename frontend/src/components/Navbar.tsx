import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import logo from "../assets/logo.png"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 w-full fixed top-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
            <img src={logo} alt="" className="w-20 h-20 rounded-full border-4 border-gray-300"/>
                {/* Menu en pantalla grande */}
                <div className="hidden md:flex space-x-4">
                    <Link to='/inicio'>Inicio</Link>
                    <Link to='/categorias'>Categorías</Link>
                    <Link to='/products'>Productos</Link>
                    <Link to='/clientes'>Clientes</Link>
                    <Link to='/add-product'>Agregar Producto</Link>
                    <Link to='/add-client'>Agregar Cliente</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>

                <div className="md:block relative">
                    <input type="text" placeholder="Buscar..." className={`${styles.inputSearch}`} />
                    <button type="button" className={`${styles.buttonSearch}`}>Buscar</button>
                </div>

                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu desplegable en pantalla pequeña */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="flex flex-col mt-2">
                    <Link to='/inicio'>Inicio</Link>
                    <Link to='/categorias'>Categorías</Link>
                    <Link to='/products'>Productos</Link>
                    <Link to='/clientes'>Clientes</Link>
                    <Link to='/add-product'>Agregar Producto</Link>
                    <Link to='/add-client'>Agregar Cliente</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;