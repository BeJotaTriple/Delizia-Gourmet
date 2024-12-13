import { useEffect, useState } from "react";
import styles from "../style";
import apiClient from "../api/apiClient";
import EditButton from "../assets/EditButton";
import DeleteButton from "../assets/DeleteButton";

// Definición de la interfaz para un categoria
interface Category {
  name: string;
  description: string;
}
// Definición de la interfaz para un producto
interface Product {
  _id: string;
  name: string;
  description: string;
  ingredients: string;
  category: Category;
  stock: number;
  price: number;
}

function Products() {
    // Uso de la interfaz Client para tipar el estado
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        apiClient.get("api/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    //agregar el parámetro client: Client
    const handleEdit = async () => {
        //Lógica para eliminar el cliente
        try{
            await apiClient.put(`api/products/`) //agregar ${clientId} a la ruta
            .then(response => setProducts(response.data))
            alert("Product deleted sucessfully")
        } catch(error) {
            console.error("Error deleting Product:", error)
        }
        console.log("Editing product:, product");
    }

    // en el parámetro se debe agregar clientId: string
    const handleDelete = async (productId: string) => {
        try{
            await apiClient.delete(`api/products/${productId}`) //agregar ${clientId} a la ruta
            setProducts(prevProducts => prevProducts.filter(product => product._id !== productId))
            alert("Product deleted sucessfully")
        } catch(error) {
            console.error("Error deleting Product:", error)
        }
    }

    return (
        <div className="m-3">
            <h2 className="font-bold">Listado de productos</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className={`${styles.theader}`}>Name</th>
                        <th className={`${styles.theader}`}>Description</th>
                        <th className={`${styles.theader}`}>Ingredients</th>
                        <th className={`${styles.theader}`}>Category</th>
                        <th className={`${styles.theader}`}>Stock</th>
                        <th className={`${styles.theader}`}>Price</th>
                        <th className={`${styles.theader}`}>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className={`${styles.tbody}`}>{product.name}</td>
                            <td className={`${styles.tbody}`}>{product.description}</td>
                            <td className={`${styles.tbody}`}>{product.ingredients}</td>
                            <td className={`${styles.tbody}`}>{product.category? product.category.name : "No se encuentra la categoria"}</td>
                            <td className={`${styles.tbody}`}>{product.stock}</td>
                            <td className={`${styles.tbody}`}>{`$${product.price}`}</td>
                            <EditButton onClick={() => handleEdit()} /> {/*Agregar product.id */}
                            <DeleteButton onClick={() => handleDelete(product._id)} /> {/*Agregar product.id */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products;