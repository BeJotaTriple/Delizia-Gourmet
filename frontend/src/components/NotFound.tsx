import { Link } from "react-router-dom";
import questionIcon from "../assets/QuestionIcon.svg"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={questionIcon} alt="Logo" className=" max-w-sm max-h-sm text-slate-500" />

      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Página no encontrada
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-gray-700 hover:text-white">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NotFound;
