import axios  from "axios";

const uploadImage = async (image: File) => {
    if (image) {
      const formDataImage = new FormData();
      formDataImage.append('file', image);
      formDataImage.append('upload_preset', import.meta.env.VITE_REACT_APP_UPLOAD_PRESET);

      try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_REACT_APP_CLOUD_NAME}/image/upload`, formDataImage);
        const imageUrl = response.data.secure_url;
        console.log('Image URL saved to database:', imageUrl);
        return imageUrl;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

export default uploadImage;