import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Search, Megaphone, Rocket, Award } from "lucide-react";

export function Timeline() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const phases = [
    {
      icon: Search,
      number: "01",
      title: "Fase Buscar y Llamar",
      description:
        "Contacto con sponsors, colegios, y secretaría de educación para fomentar el proyecto",
      color: "#2C5530",
    },
    {
      icon: Megaphone,
      number: "02",
      title: "Fase Crear Conciencia",
      description:
        "Introducir el proyecto públicamente, dar instrucciones incluyendo la crisis/problema y los ODS guía del proyecto. Formar grupos y explicar requisitos",
      color: "#3D7C47",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Fase Realizar Proyecto",
      description:
        "Los equipos desarrollan sus proyectos innovadores con evidencia fotográfica y en video del proceso completo",
      color: "#5A8F5F",
    },
    {
      icon: Award,
      number: "04",
      title: "Fase Montar y Premiar",
      description:
        "Nombrar a los ganadores y distribuir el premio con el sistema de puntajes. Reconocimiento oficial de los mejores proyectos",
      color: "#8FA988",
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-[#F9FAF8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E8EDE7] text-[#2C5530] rounded-full text-sm mb-4">
            07
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 text-[#2C5530]">
            Línea de Tiempo
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            El camino hacia la transformación de Barranquilla
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-[#2C5530] via-[#5A8F5F] to-[#8FA988] rounded-full transform -translate-y-1/2" />

          <div className="grid grid-cols-4 gap-8 relative">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Circle on timeline */}
                  <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10"
                    style={{ backgroundColor: phase.color }}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Card */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 mt-20">
                    <div
                      className="text-4xl mb-4 opacity-20"
                      style={{ color: phase.color }}
                    >
                      {phase.number}
                    </div>
                    <h3 className="text-xl mb-4 text-[#2C5530]">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: phase.color }}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  {index < phases.length - 1 && (
                    <div
                      className="w-1 flex-1 mt-4"
                      style={{ backgroundColor: phase.color, opacity: 0.3 }}
                    />
                  )}
                </div>
                <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm mb-6">
                  <div
                    className="text-3xl mb-2 opacity-20"
                    style={{ color: phase.color }}
                  >
                    {phase.number}
                  </div>
                  <h3 className="text-lg mb-3 text-[#2C5530]">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-br from-[#2C5530] to-[#3D7C47] p-12 rounded-3xl shadow-2xl text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl mb-6">Concurso Longevo</h3>
          <p className="text-lg mb-4 max-w-3xl mx-auto text-[#E8EDE7] leading-relaxed">
            CASB busca ser algo a largo plazo en la ciudad de Barranquilla. El
            objetivo es que el proyecto no muera en 2026, sino que en los
            próximos años se establezca como EL concurso más importante a nivel
            colegial.
          </p>
          <p className="text-[#E8EDE7] max-w-3xl mx-auto">
            Cada año tendrá un enfoque distinto relacionado con los Objetivos de
            Desarrollo Sostenible (ODS) y las necesidades reales de la ciudad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
