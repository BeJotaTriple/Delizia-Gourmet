import React, { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import styles from "../style"

interface Category {
    _id: string;
    name: string;
    description: string;
}

const AddProduct: React.FC = () => {
    const [formData, setformData] = useState({
        name: '',
        description: '',
        ingredients: '',
        category: '',
        stock: '',
        price: '',
    });

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        //Define el tipo de retorno de la función asíncrona
        const fetchCategories = async (): Promise<void> => {
            try{
                const response = await apiClient.get<Category[]>('api/categories/');
                setCategories(response.data); //Asignar los datos al estado
            } catch(error) {
                console.error('Error to get categories: ', error);
            };
        };
        fetchCategories();
    }, []);

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
                <select value={formData.category} onChange={e => setformData({...formData, category: e.target.value})}
                    className={`${styles.selectOptionsForm}`}>
                    <option value="" disabled>Selecciona una categoría</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category._id}>{category.name}</option>
                    ))}
                </select>
                <input type="text"placeholder="cantidad" onChange={e => setformData({ ...formData, stock: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="precio" onChange={e => setformData({ ...formData, price: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <button type="submit" className={`${styles.buttonForm}`}>Enviar</button>
            </div>
        </form>
    )
}

export default AddProduct;