import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';
import apiClient from '../api/apiClient';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


interface Data {
  categories: number;
  products: number;
  clients: number;
}

const Dashboard = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try{
            await apiClient.get('/api/dashboard')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching categories: ', error));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
  }, []);

  const chartData = {
    labels: ['Categorias', 'Productos', 'Clientes'],
    datasets: [
      {
        label: 'Colecciones',
        data: data ? [data.categories, data.products, data.clients] : [],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Categorias</h2>
          <p>{data ? data.categories : 'Loading...'}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Productos</h2>
          <p>{data ? data.products : 'Loading...'}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Clientes</h2>
          <p>{data ? data.clients : 'Loading...'}</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;