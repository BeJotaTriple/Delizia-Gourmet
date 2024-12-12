import { useEffect, useState } from "react";
import styles from "../style";
import apiClient from "../api/apiClient";
import EditButton from "../assets/EditButton";
import DeleteButton from "../assets/DeleteButton";

// Definición de la interfaz para un cliente
interface Client {
    name: string;
    email: string;
    address: string;
    city: string;
    tel_numb: string;
    reg_date: Date;
}

function Clients() {
    // Uso de la interfaz Client para tipar el estado
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        apiClient.get("/clients")
            .then(response => setClients(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    //agregar el parámetro client: Client
    const handleEdit = async () => {
        //Lógica para eliminar el cliente
        try{
            await apiClient.put(`/clients/`) //agregar ${clientId} a la ruta
            .then(response => setClients(response.data))
            alert("Client deleted sucessfully")
        } catch(error) {
            console.error("Error deleting client:", error)
        }
        console.log("Editing client:, client");
    }

    // en el parámetro se debe agregar clientId: string
    const handleDelete = async () => {
        try{
            await apiClient.delete(`/clients/`) //agregar ${clientId} a la ruta
            .then(response => setClients(response.data))
            alert("Client deleted sucessfully")
        } catch(error) {
            console.error("Error deleting client:", error)
        }
    }

    return (
        <div className="m-3">
            <h2 className="font-bold">Listado de clientes</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className={`${styles.theader}`}>Name</th>
                        <th className={`${styles.theader}`}>Email</th>
                        <th className={`${styles.theader}`}>Address</th>
                        <th className={`${styles.theader}`}>City</th>
                        <th className={`${styles.theader}`}>Phone</th>
                        <th className={`${styles.theader}`}>Register Date</th>
                        <th className={`${styles.theader}`}>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>                    
                    {clients.map((client, index) => (
                        <tr key={index}>
                            <td className={`${styles.tbody}`}>{client.name}</td>
                            <td className={`${styles.tbody}`}>{client.email}</td>
                            <td className={`${styles.tbody}`}>{client.address}</td>
                            <td className={`${styles.tbody}`}>{client.city}</td>
                            <td className={`${styles.tbody}`}>{client.tel_numb}</td>
                            <td className={`${styles.tbody}`}>{client.reg_date.toLocaleDateString()}</td>
                            <EditButton onClick={() => handleEdit()} /> {/*Agregar client.id */}
                            <DeleteButton onClick={() => handleDelete()} /> {/*Agregar client.id */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Clients;