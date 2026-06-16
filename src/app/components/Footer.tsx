import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { site } from "../../config/site";

const FOOTER_LINKS = [
  { id: "about", label: "Sobre CASB" },
  { id: "objectives", label: "Objetivos" },
  { id: "register", label: "Inscripción" },
  { id: "rules", label: "Reglas" },
  { id: "jury", label: "Jurado" },
] as const;

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#2C5530] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-3xl mb-4">CASB</h3>
            <p className="text-[#E8EDE7] leading-relaxed">
              Jóvenes transformando Barranquilla a través de la innovación y la
              conciencia ambiental.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#E8EDE7] hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 shrink-0 text-[#8FA988]" />
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-[#E8EDE7] hover:text-white transition-colors break-all"
                >
                  {site.contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 shrink-0 text-[#8FA988]" />
                <a
                  href={`tel:${site.phoneTel}`}
                  className="text-[#E8EDE7] hover:text-white transition-colors"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-[#8FA988]" />
                <span className="text-[#E8EDE7]">{site.location}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={site.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <span className="text-lg font-bold leading-none">𝕏</span>
              </a>
            </div>
            <p className="text-[#E8EDE7] mt-6 text-sm">
              Mantente actualizado con las últimas noticias del concurso
            </p>
          </div>
        </div>

        {/* Organizer Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg mb-2">Organizado por:</h4>
            <p className="text-[#E8EDE7]">David Elias Visbal Orozco</p>
            <p className="text-[#E8EDE7] text-sm">
              Colegio Marymount Barranquilla
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-[#E8EDE7] text-sm">
            © 2026 CASB - Jóvenes Transformando Barranquilla. Todos los derechos
            reservados.
          </p>
          <p className="text-[#E8EDE7] text-xs mt-2">
            Un proyecto para el futuro sostenible de nuestra ciudad
          </p>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="h-2 bg-gradient-to-r from-[#8FA988] via-[#5A8F5F] to-[#3D7C47]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </footer>
  );
}
