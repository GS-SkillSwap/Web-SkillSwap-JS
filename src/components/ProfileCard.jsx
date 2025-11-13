import { Briefcase, MapPin } from "lucide-react";

export default function ProfileCard({ profile, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700 hover:scale-105"
    >
      <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div className="px-6 pb-6 -mt-12">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover mb-4"
        />
        <h3 className="text-gray-900 dark:text-white mb-1">{profile.nome}</h3>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
          <Briefcase className="w-4 h-4" />
          <p className="text-sm">{profile.cargo}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <p className="text-sm">{profile.localizacao}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs"
            >
              {skill}
            </span>
          ))}
          {profile.habilidadesTecnicas.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
              +{profile.habilidadesTecnicas.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
