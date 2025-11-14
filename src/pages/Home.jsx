import { ArrowRight, Users } from "lucide-react";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";
import * as profilesDataModule from "../../data/profiles.json";
import { useEffect, useState } from "react";

export default function AdminLayout() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    try {
      const data = profilesDataModule.default || profilesDataModule;

      if (Array.isArray(data)) {
        console.log(`Successfully loaded ${data.length} profiles`);
        setProfiles(data);
      } else {
        console.log("Profiles data is not an array:", typeof data, data);
        setProfiles([]);
      }
    } catch (error) {
      console.error("Error loading profiles:", error);
      setProfiles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl text-white leading-tight">
                O Futuro do Trabalho Começa{" "}
                <span className="text-yellow-300">Aqui</span>
              </h1>
              <p className="text-xl text-white/90">
                Conectamos pessoas, competências e propósito através da
                tecnologia. Construa uma carreira que faz sentido e gera impacto
                real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#perfis"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 transform"
                >
                  Começar Agora
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="block">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Equipe colaborando"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <main id="perfis" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar />

        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300">
            {profiles.length}{" "}
            {profiles.length === 1
              ? "profissional encontrado"
              : "profissionais encontrados"}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-pin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Carregando perfis...
            </p>
          </div>
        ) : profiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onClick={() => setSelectedProfile(profile)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-gray-700 dark:text-gray-300 mb-2">
              Nenhum profissional encontrado
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Tente ajustar seus filtros ou realizar uma nova busca
            </p>
          </div>
        )}
      </main>

      {/* Profile Modal */}
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}
