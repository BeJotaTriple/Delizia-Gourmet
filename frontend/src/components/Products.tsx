import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "../style";
import apiClient from "../api/apiClient";
import EditButton from "../assets/EditButton";
import DeleteButton from "../assets/DeleteButton";
import ModalProducts from "../components/ModalProduct";
import VisualizeButton from "../assets/VisualizeButton";

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
  image: string;
}

function Products() {
    // Uso de la interfaz Product para tipar el estado
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        apiClient.get("api/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const getProduct = (product: Product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const navigate = useNavigate();
    const handleEdit = async (productId: string) => {
        navigate(`/edit-product/${productId}`);
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
                            <EditButton onClick={() => handleEdit(product._id)} />
                            <DeleteButton onClick={() => handleDelete(product._id)} />
                            <VisualizeButton onClick={() => getProduct(product)}/>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && selectedProduct && (
                <ModalProducts
                product={selectedProduct}
                onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    )
}

export default Products;