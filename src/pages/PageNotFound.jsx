import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-red-600 dark:text-red-400">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
          Página não encontrada
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link
          to="/"
          className="text-white bg-blue-600 dark:bg-blue-700 px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
