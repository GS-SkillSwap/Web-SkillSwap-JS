import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/SkillSwap-icon.jpg"
                alt="SkillSwap"
                className="w-8 h-8 rounded"
              />
              <h3 className="text-xl font-bold">SkillSwap</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Conectamos pessoas, competências e propósito através da
              tecnologia. Construa uma carreira que faz sentido e gera impacto
              real.
            </p>
            <p className="text-sm text-gray-500">
              Feito com <Heart className="inline w-4 h-4 text-red-500" /> usando React
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#perfis"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Profissionais
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SkillSwap. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
