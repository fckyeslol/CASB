import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Target, Sprout, Lightbulb, GraduationCap, Heart } from "lucide-react";

export function Objectives() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const objectives = [
    {
      icon: Target,
      title: "Impacto real en la ciudad",
      description:
        "Crear soluciones tangibles que transformen positivamente a Barranquilla",
      color: "#2C5530",
    },
    {
      icon: Sprout,
      title: "Conciencia ambiental",
      description:
        "Fomentar la responsabilidad ecológica en las nuevas generaciones",
      color: "#5A8F5F",
    },
    {
      icon: Lightbulb,
      title: "Innovación juvenil",
      description:
        "Impulsar el pensamiento creativo y las soluciones innovadoras",
      color: "#8FA988",
    },
    {
      icon: GraduationCap,
      title: "Educación y crecimiento",
      description:
        "Desarrollar habilidades clave para el futuro profesional de los jóvenes",
      color: "#3D7C47",
    },
    {
      icon: Heart,
      title: "Compromiso comunitario",
      description:
        "Crear una red de jóvenes comprometidos con el futuro de su ciudad",
      color: "#5A8F5F",
    },
  ];

  return (
    <section id="objectives" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E8EDE7] text-[#2C5530] rounded-full text-sm mb-4">
            02
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 text-[#2C5530]">
            Nuestros Objetivos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transformar la ciudad a través de la innovación juvenil y la
            conciencia ambiental
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-[#F9FAF8] to-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${objective.color}20` }}
                >
                  <Icon size={36} style={{ color: objective.color }} />
                </div>
                <h3 className="text-2xl mb-4 text-[#2C5530]">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ backgroundColor: objective.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-[#2C5530] to-[#3D7C47] rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl mb-2">200,000+</div>
              <div className="text-[#E8EDE7] text-lg">
                Estudiantes de bachillerato en Barranquilla
              </div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl mb-2">50+</div>
              <div className="text-[#E8EDE7] text-lg">
                Colegios públicos objetivo
              </div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl mb-2">56%</div>
              <div className="text-[#E8EDE7] text-lg">
                Acceso a educación superior (2024)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
