import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";

// Definición de la interfaz para categoria
interface Category {
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

    return (
        <div className="m-3">
            <h2 className="font-bold">Listado de categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categorias.map((categoria, index) => {
                return (
                    <div key={index} className="bg-white rounded overflow-hidden shadow-md p-4">
                        <h3 className="font-bold">Categoría {categoria.name}</h3> {/*usar categoria.name*/}
                        <img className="h-1/2 rounded shadow-md mx-auto" src={categoria.image || "https://content.elmueble.com/medio/2021/02/15/cenas-saludables-tosta-00526812_7ea32575_1200x1766.jpg"}></img> {/*usar categoria.image*/}
                        <div className="m-4">
                            <span className="mx-auto text-lg">{categoria.description}</span>
                            <span className="block text-gray-500 text-sm">Cantidad: {index + 1}</span>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Categorias;