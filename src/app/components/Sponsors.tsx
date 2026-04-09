import { motion } from "motion/react";
import { useInView } from "./useInView";
import { mailtoHref } from "../../config/site";

const sponsorMailto = mailtoHref({
  subject: "CASB — Aliado / patrocinio",
  body:
    "Hola,\n\nMe interesa apoyar o patrocinar el Concurso CASB.\n\nNombre / empresa:\nTeléfono:\n\nGracias.",
});

export function Sponsors() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const sponsors = [
    "Triple A",
    "Talectro ING",
    "Acodal",
    "Barranquilla Verde",
    "Ecosol",
    "Atica",
  ];

  return (
    <section id="sponsors" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E8EDE7] text-[#2C5530] rounded-full text-sm mb-4">
            06
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 text-[#2C5530]">
            Nuestros Aliados
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-2">
            Aliados en la construcción de un futuro sostenible
          </p>
          <p className="text-gray-600">
            Empresas comprometidas con el medio ambiente y la educación
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F9FAF8] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#2C5530]/10 flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl text-[#2C5530]">
                    {sponsor.charAt(0)}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{sponsor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#2C5530] to-[#3D7C47] p-12 rounded-3xl shadow-2xl text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl mb-6">
            ¿Quieres ser parte del cambio?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#E8EDE7]">
            Únete como sponsor y contribuye a formar la próxima generación de
            líderes ambientales en Barranquilla
          </p>
          <a
            href={sponsorMailto}
            className="inline-block px-10 py-4 bg-white text-[#2C5530] rounded-full hover:bg-[#E8EDE7] transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contáctanos
          </a>
        </motion.div>

        {/* Government Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl mb-6 text-[#2C5530]">Apoyo Institucional</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F9FAF8] p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="text-xl mb-2 text-[#2C5530]">
                Alcaldía de Barranquilla
              </h4>
              <p className="text-gray-600">
                Comprometidos con el desarrollo juvenil y sostenible
              </p>
            </div>
            <div className="bg-[#F9FAF8] p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-xl mb-2 text-[#2C5530]">
                Gobernación del Atlántico
              </h4>
              <p className="text-gray-600">
                Impulsando la educación y el medio ambiente
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
