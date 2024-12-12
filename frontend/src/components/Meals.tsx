import { useEffect, useState } from "react";

function Meals() {
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/meal/:id_category") //por establecer con el Back
        .then((response) => response.json())
        .then((data) => setMeal(data))
        .catch((error) => console.error("Error al obtener las comidas", error))
    }, []);

    // Tabla con botones para CRUD
    // Agregar con retorno a Inicio
    return (
        <div>
            <div>
                {/* Colecciones pertenecientes a la categoría seleccionada*/}
                {meal.map((meal) => {
                    return(
                        <p>Nombre: `${meal}`</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Meals;