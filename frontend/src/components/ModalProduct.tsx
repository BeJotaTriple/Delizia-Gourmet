import React from "react";

interface Category {
    name: string;
    description: string;
}

interface Product {
    _id: string;
    name: string;
    description: string;
    ingredients: string;
    category: Category;
    stock: number;
    price: number;
    image: string;
}

interface ModalProps {
    product: Product; // Product to display
    onClose: () => void;   // Function to close the modal
}

const ModalProduct: React.FC<ModalProps> = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <button type="button" onClick={onClose} 
                className="bg-gray-300 font-bold text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bottom-[-40%] left-[50%] relative"> Cerrar </button>
            <div className="flex justify-end absolute">
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-0 max-w-[70%] max-h-[50%] mx-auto mt-10 z-100 w-full flex md:flex-row flex-col overflow-scroll">
                <div className="flex flex-col items-center w-full pr-4">
                    <h2 className="text-xl font-semibold mb-4">Detalles del producto</h2>
                    <p className="text-black-600">{product.name}</p>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-600 mt-2"><strong>Ingredientes:</strong> {product.ingredients}</p>
                    <p className="text-gray-600 mt-2"><strong>Categorías:</strong> {product.category.name}</p>
                    <p className="text-gray-600 mt-2"><strong>Stock:</strong> {product.stock}</p>
                    <p className="text-gray-600 mt-2"><strong>Precio:</strong> ${product.price}</p>
                </div>
                <div className="flex justify-end mt-6 md:ml-auto md:min-w-[300px] min-w-[300px] max-w-[30%]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-3xl" />
                </div>
            </div>
        </div>
    );
};

export default ModalProduct;