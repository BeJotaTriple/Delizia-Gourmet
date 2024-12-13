import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import DeleteButton from "../assets/DeleteButton";

// Definición de la interfaz para categoria
interface Category {
    _id: string;
    name: string;
    description: string;
    image?: string;
}

function Categorias() {
    const [categorias, setCategorias] = useState<Category[]>([]);

    //Realizar petición al backend para obtener las categorías existentes
    useEffect(() => {
        apiClient.get("/api/categories")
            .then(response => setCategorias(response.data))
            .catch(error => console.error('Error fetching categories: ', error));
    }, []);

    //Función para eliminar una categoría
        const handleDelete = async (categoryId: string) => {
        try{
            await apiClient.delete(`api/categories/${categoryId}`) //agregar ${clientId} a la ruta
            setCategorias(prevCategories => prevCategories.filter(category => category._id !== categoryId))
            alert("Category deleted sucessfully")
        } catch(error) {
            console.error("Error deleting Category:", error)
        }
    }

    return (
        <div className="m-3">
            <h2 className="font-bold">Listado de categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {categorias.map((categoria, index) => {
                return (
                    <div key={index} className="bg-white rounded overflow-hidden shadow-md p-4 max-h-[600px] relative">
                        <h3 className="font-bold">Categoría {categoria.name}</h3> {/*usar categoria.name*/}
                        <img className="h-1/2 rounded shadow-md mx-auto w-full object-cover " src={categoria.image || "https://content.elmueble.com/medio/2021/02/15/cenas-saludables-tosta-00526812_7ea32575_1200x1766.jpg"}></img> {/*usar categoria.image*/}
                        <div className="m-4">
                            <span className="mx-auto text-lg">{categoria.description}</span>
                            <span className="block text-gray-500 text-sm">Cantidad: {index + 1}</span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                        <DeleteButton onClick={() => handleDelete(categoria._id)} />
                        </div>
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}

export default Categorias;