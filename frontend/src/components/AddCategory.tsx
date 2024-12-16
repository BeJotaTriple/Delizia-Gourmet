import React, { useState, useEffect } from 'react';
import uploadImage from '../api/apiCloudinary';
import apiClient from '../api/apiClient';
import styles from '../style';

const AddCategory: React.FC = () => {
  //Creación del formulario
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: ''
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiClient.post("/api/categories", formData);
      alert("Category saved successfully");
      setFormData({ name: "", description: "", image: "" });

    } catch (error) {
      alert(`Error saving category`);
      console.log(error);
    }
  };

  useEffect(() => {
    handleUpload()
  }, [image]);

  //función para manejar el cambio del input de imagen y mostrar la carga
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]; 
      setImage(file); 
      setImagePreview(URL.createObjectURL(file));
      setLoading(true);
    }
  };

  //función para subir la imagen al cloudinary y actualizar el estado del formulario con la url de la imagen
  const handleUpload = async () =>{
    if (!image) return("No image for upload");
    const imageUrl = await uploadImage(image);
    setFormData(prev => ({ ...prev, image: imageUrl }))
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}  className="max-w-lg mx-auto p-4">
      <div className="flex flex-col space-y-4">
        <h2 className="font-bold w-full">Agregar categoría</h2>
        <input type="text" placeholder="nombre" onChange={e => setFormData({ ...formData, name: e.target.value })}
          className={`${styles.inputForm}`} />
        <input type="text" placeholder="descripción" onChange={e => setFormData({ ...formData, description: e.target.value })}
          className={`${styles.inputForm}`} />
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
};

export default AddCategory;