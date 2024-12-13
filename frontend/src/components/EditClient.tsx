import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";
import styles from "../style";

const EditClient: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        tel_numb: '',
        reg_date: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        apiClient.get(`/api/clients/${id}`)
            .then(response => setFormData(response.data))
            .catch(error => console.error('Error fetching client data: ', error));
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiClient.put(`/api/clients/${id}`, formData);
            alert('Client updated successfully');
            navigate('/clientes');
        } catch (error) {
            alert('Error updating client');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
            <div className="flex flex-col space-y-4">
                <h2 className="font-bold w-full">Editar cliente</h2>
                <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="tel" value={formData.tel_numb} onChange={e => setFormData({ ...formData, tel_numb: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="date" value={formData.reg_date} onChange={e => setFormData({ ...formData, reg_date: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <button type="submit" className={`${styles.buttonForm}`}>Enviar</button>
            </div>
        </form>
    );
}

export default EditClient;
