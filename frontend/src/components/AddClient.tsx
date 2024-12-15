import React, { useState } from "react";
import apiClient from "../api/apiClient";
import styles from "../style"

const AddClient: React.FC = () => {
    const [formData, setformData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        tel_numb: '',
        reg_date: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await apiClient.post('api/clients/', formData);
            alert('Client registered sucessfully');
        } catch (error) {
            alert('Error registering client');
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
            <div className="flex flex-col space-y-4">
                <h2 className="font-bold w-full">Agregar cliente</h2>
                <input type="text" placeholder="Nombre" onChange={e => setformData({ ...formData, name: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="email" placeholder="example@gmail.com" onChange={e => setformData({ ...formData, email: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="Dirección" onChange={e => setformData({ ...formData, address: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="text" placeholder="Ciudad" onChange={e => setformData({ ...formData, city: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="tel" placeholder="Telefono/Celular" onChange={e => setformData({ ...formData, tel_numb: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <input type="date" placeholder="reg_date" onChange={e => setformData({ ...formData, reg_date: e.target.value })}
                    className={`${styles.inputForm}`}/>
                <button type="submit" className={`${styles.buttonForm}`}>Enviar</button>
            </div>
        </form>
    )
}

export default AddClient;