import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import uploadImage from '../api/apiCloudinary';
import apiClient from "../api/apiClient";
import styles from "../style"

interface Category {
    _id: string;
    name: string;
    description: string;
}

const EditProduct: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        ingredients: '',
        category: '',
        stock: '',
        price: '',
        image: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
        fetchProductData(id);
        }
    }, [id]);

    const fetchProductData = async (productId: string) => {
        try {
        const response = await apiClient.get(`/api/products/${productId}`);
        //Toca asignarlo cada uno para asegurar traer el id de category
        setFormData({
            name: response.data.name,
            description: response.data.description,
            ingredients: response.data.ingredients,
            category: response.data.category._id,
            stock: response.data.stock,
            price: response.data.price,
            image: response.data.image,
        });
        setImagePreview(response.data.image || null);
        } catch (error) {
        alert(`Error fetching product data`);
        console.log(error);
        }
    };

    const [categories, setCategories] = useState<Category[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCategories = async (): Promise<void> => {
            try{
                const response = await apiClient.get<Category[]>('api/categories/');
                setCategories(response.data);
            } catch(error) {
                console.error('Error to get categories: ', error);
            };
        };
        fetchCategories();
    }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formData)
        await apiClient.put(`/api/products/${id}`, formData);
        alert("Product saved successfully");
        setFormData({
          name: '',
          description: '',
          ingredients: '',
          category: '',
          stock: '',
          price: '',
          image: ''
        });
        navigate('/products');
    } catch (error) {
      alert('Error saving product');
      console.log(error);
    }
  };

    useEffect(() => {
      handleUpload();
    }, [image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setLoading(true);
    }
  };

  const handleUpload = async () => {
    if (!image) return("No image for upload");
    const imageUrl = await uploadImage(image);
    setFormData(prev => ({ ...prev, image: imageUrl }))
    setLoading(false);
  };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
            <div className="flex flex-col space-y-4">
                <h2 className="font-bold w-full">Agregar producto</h2>
                <input type="text" placeholder="Nombre" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <textarea placeholder="Descripción" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="Ingredientes" value={formData.ingredients} onChange={e => setFormData({ ...formData, ingredients: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}
                    className={`${styles.selectOptionsForm}`}>
                    <option value="" disabled>Selecciona una categoría</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category._id}>{category.name}</option>
                    ))}
                </select>
                <input type="number" placeholder="Cantidad" value={formData.stock} onChange={e => setFormData({ ...formData, stock: e.target.value })}
                    className={`${styles.inputForm}`} min="0" />
                <input type="number" placeholder="Precio" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })}
                    className={`${styles.inputForm}`} min="0" />
                <div className="flex items-center justify-evenly space-x-4">
                  <input type="file" onChange={handleImageChange} className="hidden appearance-none" id="file-input" />
                  <label htmlFor="file-input" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded" > Seleccionar imagen </label> {imagePreview && ( 
                  <div className="w-32 h-32"> 
                  <img src={imagePreview} alt="Vista previa de la imagen" className="rounded-lg w-full h-full object-cover" />
                  </div> 
                  )} 
                </div>
                <button type="submit" className={`${styles.buttonForm} ${loading? styles.buttonDisabled : ''}`} disabled={loading}>{loading? 'Cargando imagen...': 'Actualizar'}</button>
                <button type="button" onClick={() => navigate('/categorias')} className={`${styles.buttonForm}`}>Cancelar</button>
            </div>
        </form>
    )
}

export default EditProduct;