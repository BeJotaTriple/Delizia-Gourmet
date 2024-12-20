import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "../style";
import apiClient from "../api/apiClient";
import EditButton from "../assets/EditButton";
import DeleteButton from "../assets/DeleteButton";
import { format } from 'date-fns';
// Definición de la interfaz para un cliente
interface Client {
    _id: string;
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
    const navigate = useNavigate();

    useEffect(() => {
        apiClient.get("api/clients")
            .then(response => setClients(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    //agregar el parámetro client: Client
    const handleEdit = async (clientId: string) => {
        navigate(`/edit-client/${clientId}`);
    }

    // en el parámetro se debe agregar clientId: string
    const handleDelete = async (clientId: string) => {
        try{
            await apiClient.delete(`api/clients/${clientId}`) //agregar ${clientId} a la ruta
            setClients(prevClients => prevClients.filter(client => client._id !== clientId));
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
                            <td className={`${styles.tbody}`}>{format(client.reg_date, 'MM/dd/yyyy')}</td>
                            <EditButton onClick={() => handleEdit(client._id)} /> {/*Agregar client.id */}
                            <DeleteButton onClick={() => handleDelete(client._id)} /> {/*Agregar client.id */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Clients;