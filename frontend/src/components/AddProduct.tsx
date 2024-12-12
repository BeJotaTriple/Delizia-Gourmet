import React, { useState } from "react";
import apiClient from "../api/apiClient";
import styles from "../style"

const AddProduct: React.FC = () => {
    const [formData, setformData] = useState({
        name: '',
        description: '',
        ingredients: '',
        category: '',
        stock: '',
        price: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiClient.post('api/products/', formData);
            alert('Product registered sucessfully');
        } catch (error) {
            alert('Error registering product');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
            <div className="flex flex-col space-y-4">
                <h2 className="font-bold w-full">Agregar producto</h2>
                <input type="text" placeholder="nombre" onChange={e => setformData({ ...formData, name: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="descripción" onChange={e => setformData({ ...formData, description: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="ingredientes" onChange={e => setformData({ ...formData, ingredients: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="categoría" onChange={e => setformData({ ...formData, category: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text"placeholder="stock" onChange={e => setformData({ ...formData, stock: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="price" onChange={e => setformData({ ...formData, price: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <button type="submit" className={`${styles.buttonForm}`}>Enviar</button>
            </div>
        </form>
    )
}

export default AddProduct;