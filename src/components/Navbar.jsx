import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const isDark = savedDarkMode === "true";
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
    return isDark;
  });

  const handleDark = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", newDarkMode.toString());
  };
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg w-full fixed top-0 left-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* Esquerda: Logo e Título */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="bg-white/10 dark:bg-gray-800/50 p-2 rounded-lg backdrop-blur-md border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300">
              <img
                src="/SkillSwap-icon.jpg"
                alt="SkillSwap"
                className="h-8 w-8 rounded object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              <Link
                to="/"
                className="hover:text-accent-200 dark:hover:text-accent-300 transition-colors duration-300 flex items-center gap-2"
              >
                SkillSwap
              </Link>
            </h1>
          </div>

          {/* Centro: Navegação */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `group relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 dark:border-gray-700 hover:border-white/40 dark:hover:border-gray-600 hover:shadow-lg hover:shadow-accent-500/20 ${
                  isActive
                    ? "bg-blue-600 hover:bg-blue-700 text-white/90 hover:text-white"
                    : "bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 text-black/90 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`
              }
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-skill-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </NavLink>
          </div>

          <div className="flex gap-4">
            {/* Botao Modo Escuro */}
            <button
              onClick={handleDark}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>

            {/* Direita: Botão Login */}
            <div className="flex items-center">
              <Link
                to="/login"
                className="group relative bg-white dark:bg-gray-800 dark:text-gray-200 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-accent-500/30 overflow-hidden"
              >
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-skill-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
