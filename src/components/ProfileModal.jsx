import {
  X,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Heart,
  Link as LinkIcon,
  Calendar,
  Notebook,
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import MessageModal from "./MessageModal";

export default function ProfileModal({ profile, onClose }) {
  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleRecommend = () => {
    toast.success(`Você recomendou ${profile.nome}!`, {
      description: "Sua recomendação foi enviada com sucesso.",
    });
  };

  const handleSendMessage = () => {
    setShowMessageModal(true);
  };

  const formatDate = (date) => {
    const [year, month] = date.split("-");
    const months = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-t-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-start gap-6">
            <img
              src={profile.foto}
              alt={profile.nome}
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />

            <div className="flex-1 text-white">
              <h2 className="text-white mb-2">{profile.nome}</h2>
              <p className="text-lg mb-2">{profile.cargo}</p>

              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{profile.localizacao}</span>
              </div>

              <p className="text-sm opacity-90">{profile.resumo}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={handleRecommend}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              Recomendar profissional
            </button>

            <button
              onClick={handleSendMessage}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <LinkIcon className="w-5 h-5" />
              Enviar mensagem
            </button>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Notebook className="w-5 h-5" />
              Resumo
            </h3>

            <p className="text-sm text-gray-900 dark:text-white">
              {profile.descricao}
            </p>
          </div>

          {/* Hard Skills */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Habilidades Técnicas
            </h3>

            <div className="flex flex-wrap gap-2">
              {profile.habilidadesTecnicas.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {profile.softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Experiência Profissional
            </h3>

            <div className="space-y-4">
              {profile.experiencias.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h4 className="text-gray-900 dark:text-white">{exp.cargo}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.empresa}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(exp.inicio)} -{" "}
                      {exp.fim ? formatDate(exp.fim) : "Atual"}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {exp.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Formação Acadêmica
            </h3>

            <div className="space-y-3">
              {profile.formacao.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-gray-900 dark:text-white">{edu.curso}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.instituicao}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(edu.inicio)} -{" "}
                      {edu.fim ? formatDate(edu.fim) : "Atual"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          {profile.projetos.length > 0 && (
            <div>
              <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <LinkIcon className="w-5 h-5" />
                Projetos Destacados
              </h3>

              <div className="space-y-3">
                {profile.projetos.map((projeto, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                  >
                    <h4 className="text-gray-900 dark:text-white mb-1">
                      {projeto.titulo}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {projeto.descricao}
                    </p>

                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:underline flex items-center gap-1"
                    >
                      <LinkIcon className="w-3 h-3" />
                      Ver projeto
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {profile.certificacoes.length > 0 && (
            <div>
              <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Certificações
              </h3>

              <div className="space-y-2">
                {profile.certificacoes.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Idiomas
            </h3>

            <div className="flex flex-wrap gap-3">
              {profile.idiomas.map((idioma, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-2"
                >
                  <p className="text-gray-900 dark:text-white">
                    {idioma.idioma}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {idioma.nivel}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Interest */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Áreas de Interesse
            </h3>

            <div className="flex flex-wrap gap-2">
              {profile.areaInteresses.map((area, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <MessageModal
          profile={profile}
          onClose={() => setShowMessageModal(false)}
        />
      )}
    </div>
  );
}
