import React, { useState } from 'react';
import axios from 'axios';

const UploadImage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'ml_default');

      try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dl8mgmlbq/image/upload', formData);
        const imageUrl = response.data.secure_url;

        // Enviar la URL de la imagen a tu backend para almacenarla en la base de datos
        console.log('Image URL saved to database:', imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default UploadImage;
