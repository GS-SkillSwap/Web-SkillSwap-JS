import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg w-full fixed top-0 left-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* Esquerda: Logo e Título */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
              <img
                src="/SkillSwap-icon.jpg"
                alt="SkillSwap"
                className="h-8 w-8 rounded object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-black">
              <Link
                to="/"
                className="hover:text-accent-200 transition-colors duration-300 flex items-center gap-2"
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
                `group relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-accent-500/20 ${
                  isActive
                    ? "bg-blue-600 hover:bg-blue-700 text-white/90 hover:text-white"
                    : "bg-white/10 hover:bg-white/20 text-black/90 hover:text-black"
                }`
              }
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-skill-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </NavLink>
          </div>

          {/* Direita: Botão Login */}
          <div className="flex items-center">
            <Link
              to="/login"
              className="group relative bg-white text-primary-700 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-accent-500/30 overflow-hidden"
            >
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-skill-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
