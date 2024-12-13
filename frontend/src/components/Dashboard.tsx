import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


interface Data {
  categories: number;
  products: number;
  clients: number;
}

const Dashboard = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    // Simulación de una llamada a la base de datos
    const fetchData = async () => {
      // Aquí iría la lógica para obtener datos de la base de datos
      const response = await new Promise<Data>((resolve) =>
        setTimeout(() => resolve({ categories: 10, products: 20, clients: 30 }), 1000)
      );
      setData(response);
    };

    fetchData();
  }, []);

  const chartData = {
    labels: ['Categories', 'Products', 'Clients'],
    datasets: [
      {
        label: 'Collections',
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
          <h2 className="text-xl font-semibold">Categories</h2>
          <p>{data ? data.categories : 'Loading...'}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Products</h2>
          <p>{data ? data.products : 'Loading...'}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Clients</h2>
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