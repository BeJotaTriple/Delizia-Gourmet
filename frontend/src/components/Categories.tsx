//import { useEffect, useState } from "react";

function Categorias() {
    // const [categorias, setCategorias] = useState([]);

    // //Realizar petición al backend para obtener las categorías existentes
    // useEffect(() => {
    //     fetch("http://localhost:5000/api/categories")
    //         .then((response) => response.json())
    //         .then((data) => setCategorias(data))
    //         .catch((error) => console.error("Error al obtener las categorías", error))
    // }, []);

    const categorias = ["Desayunos", "Almuerzos", "Snacks", "Cenas"]
    return (
        <div className="m-3">
            <h2 className="font-bold">Listado de categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categorias.map((index) => {
                return (
                    <div key={index} className="bg-white rounded overflow-hidden shadow-md p-4">
                        <h3 className="font-bold">Categoría {index}</h3> {/*usar categoria.name*/}
                        <img src="https://content.elmueble.com/medio/2021/02/15/cenas-saludables-tosta-00526812_7ea32575_1200x1766.jpg"
                        className="w-full h-32 sm:h-48 object-cover"></img> {/*usar categoria.image*/}
                        <div className="m-4">
                            <span className="text-md">Descripción</span>
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