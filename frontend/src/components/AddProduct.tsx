import React, { useState, useEffect, useRef } from 'react';
import uploadImage from '../api/apiCloudinary';
import apiClient from "../api/apiClient";
import styles from "../style"

interface Category {
    _id: string;
    name: string;
    description: string;
}

const AddProduct: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        ingredients: '',
        category: '',
        stock: '',
        price: '',
        image: ''
    });

    const [categories, setCategories] = useState<Category[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

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
      console.log(formData)
        await apiClient.post("api/products/", formData);
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
        handleClear()
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

  const formRef= useRef(null);
  const handleClear = () => {
    const inputs = formRef.current.querySelectorAll('input, textarea');
    inputs.forEach((field: { value: string; }) => { field.value = ''; });
    setImagePreview("");
  }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
            <div className="flex flex-col space-y-4">
                <h2 className="font-bold w-full">Agregar producto</h2>
                <input type="text" placeholder="nombre" onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="descripción" onChange={e => setFormData({ ...formData, description: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="ingredientes" onChange={e => setFormData({ ...formData, ingredients: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}
                    className={`${styles.selectOptionsForm}`}>
                    <option value="" disabled>Selecciona una categoría</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category._id}>{category.name}</option>
                    ))}
                </select>
                <input type="number"placeholder="cantidad" onChange={e => setFormData({ ...formData, stock: e.target.value })}
                    className={`${styles.inputForm}`} min="0" />
                <input type="number" placeholder="precio" onChange={e => setFormData({ ...formData, price: e.target.value })}
                    className={`${styles.inputForm}`} min="0" />
                <div className="flex items-center justify-evenly space-x-4">
                  <input type="file" onChange={handleImageChange} className="hidden appearance-none" id="file-input" />
                  <label htmlFor="file-input" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded" > Seleccionar imagen </label> {imagePreview && ( 
                  <div className="w-32 h-32"> 
                  <img src={imagePreview} alt="Vista previa de la imagen" className="rounded-lg w-full h-full object-cover" />
                  </div> 
                  )} 
                </div>
                <button type="submit" className={`${styles.buttonForm} ${loading? styles.buttonDisabled : ''}`} disabled={loading}>{loading? 'Cargando imagen...': 'Enviar'}</button>
            </div>
        </form>
    )
}

export default AddProduct;