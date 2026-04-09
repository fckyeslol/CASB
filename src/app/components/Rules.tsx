import { motion } from "motion/react";
import { useInView } from "./useInView";
import {
  Users,
  Calendar,
  Target,
  CheckCircle,
  Video,
  Award,
} from "lucide-react";

export function Rules() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const rules = [
    {
      icon: Users,
      title: "Equipos",
      description:
        "Para fomentar el trabajo en equipo, el proyecto es llevado a cabo por 2-5 estudiantes por grupo.",
    },
    {
      icon: Target,
      title: "Objetivo del Proyecto",
      description:
        "El proyecto que escojan debe estar relacionado con el objetivo general del concurso: sostenibilidad y ambiente.",
    },
    {
      icon: Calendar,
      title: "Edad",
      description:
        "Participantes del grupo deben ser mayores a los 14 años, y con edad máxima de 18 años.",
    },
    {
      icon: Video,
      title: "Requerimientos de Evidencia",
      description:
        "Deben entregar videos mostrando la construcción del proyecto para credibilidad. Estos deben mostrar la gran mayoría de la construcción.",
    },
    {
      icon: CheckCircle,
      title: "Validez del Proyecto",
      description:
        "Los proyectos innovativos que estén combinados con elementos físicos serán más posibles a ganar. Se requieren citas de fuentes de investigación.",
    },
    {
      icon: Award,
      title: "Presentación Final",
      description:
        "El día de la presentación debe venir el grupo completo a presentar el proyecto a jurados, expertos, e invitados (colegios, empresas, gobierno, etc.)",
    },
  ];

  return (
    <section id="rules" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E8EDE7] text-[#2C5530] rounded-full text-sm mb-4">
            04
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 text-[#2C5530]">
            Reglas del Concurso
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conoce las reglas y requisitos para participar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F9FAF8] p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2C5530]/10 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-[#2C5530]" />
                </div>
                <h3 className="text-xl mb-4 text-[#2C5530]">{rule.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {rule.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#FFB84D]/20 to-[#FFB84D]/10 border-l-4 border-[#FFB84D] p-8 rounded-2xl"
        >
          <h3 className="text-2xl mb-4 text-[#2C5530]">
            Importante: Integridad del Concurso
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Si hay posible fraude o falta de evidencia adecuada, el grupo se le
            anulará la posibilidad de ganar. Queremos asegurar justicia y
            equidad para todos los participantes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
