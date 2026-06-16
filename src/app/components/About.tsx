import { motion } from "motion/react";
import { useInView } from "./useInView";
import {
  Lightbulb,
  Users,
  Target,
  Leaf,
  Presentation,
  Brain,
  Zap,
  MessageSquare,
} from "lucide-react";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skills = [
    { icon: Lightbulb, label: "Creatividad", color: "#FFB84D" },
    { icon: Brain, label: "Pensamiento Crítico", color: "#8FA988" },
    { icon: Zap, label: "Innovación", color: "#2C5530" },
    { icon: Target, label: "Ejecución de Ideas", color: "#5A8F5F" },
    { icon: Leaf, label: "Conciencia Ambiental", color: "#3D7C47" },
    { icon: Users, label: "Trabajo en Equipo", color: "#8FA988" },
    { icon: MessageSquare, label: "Solución de Problemas", color: "#2C5530" },
    { icon: Presentation, label: "Presentación de Ideas", color: "#5A8F5F" },
  ];

  return (
    <section id="about" className="py-24 bg-[#F9FAF8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E8EDE7] text-[#2C5530] rounded-full text-sm mb-4">
            01
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 text-[#2C5530]">
            ¿Qué es CASB?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <strong>CASB</strong> (Concurso de Ambiente y Sostenibilidad en
            Barranquilla) es un concurso accesible para todo tipo de personas en
            la ciudad de Barranquilla, donde pueden demostrar grandes destrezas
            en diversas áreas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <Icon size={32} style={{ color: skill.color }} />
                </div>
                <h3 className="text-lg text-gray-800">{skill.label}</h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl md:text-4xl mb-6 text-[#2C5530]">
              ¿Por qué este proyecto?
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              El incentivo a la educación en la ciudad es muy importante. Es de
              interés y bienestar general que se fomenten este tipo de eventos
              que llaman a los jóvenes a actuar por su ciudad.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ellos se sentirán con el poder de impactar, con poder representar
              a su ciudad. Y con verdadero valor de participar en un evento para
              cambiar el mundo.
            </p>
          </div>
          <div className="relative">
            <img
              src="/equipo-1.jpg"
              alt="Equipo organizador de CASB"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8FA988]/20 rounded-full blur-3xl -z-10" />
          </div>
        </motion.div>

        {/* Galería del equipo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl mb-8 text-[#2C5530] text-center">
            Nuestro equipo
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["/equipo-1.jpg", "/equipo-2.jpg", "/equipo-3.jpg"].map(
              (src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="overflow-hidden rounded-3xl shadow-lg group"
                >
                  <img
                    src={src}
                    alt={`Equipo CASB ${index + 1}`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
