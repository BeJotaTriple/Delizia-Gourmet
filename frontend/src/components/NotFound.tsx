import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-400 mb-4">
        Página no encontrada
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NotFound;
