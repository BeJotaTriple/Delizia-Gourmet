import React, { useState } from 'react';
import axios from 'axios';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleUpload();
      await apiClient.post('api/categories/', formData);
      console.log(formData);
      alert('Category registered sucessfully');
    } catch (error) {
      alert('Error registering category');
    }
  };

  // Manejo de imagen para cloudify
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (image) {
      const formDataImage = new FormData();
      formDataImage.append('file', image);
      formDataImage.append('upload_preset', 'ml_default');

      try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dl8mgmlbq/image/upload', formDataImage);
        const imageUrl = response.data.secure_url;
        setFormData({...formData, image: imageUrl});
        // Enviar la URL de la imagen a tu backend para almacenarla en la base de datos
        console.log('Image URL saved to database:', imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="flex flex-col space-y-4">
        <h2 className="font-bold w-full">Agregar categoría</h2>
        <input type="text" placeholder="nombre" onChange={e => setFormData({ ...formData, name: e.target.value })}
          className={`${styles.inputForm}`} />
        <input type="text" placeholder="descripción" onChange={e => setFormData({ ...formData, description: e.target.value })}
          className={`${styles.inputForm}`} />
        <div>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit" className={`${styles.buttonForm}`}>Enviar</button>
      </div>
    </form>
  )
};

export default AddCategory;