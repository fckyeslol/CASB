import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Award, Leaf, GraduationCap, Building2 } from "lucide-react";

export function Jury() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const juryMembers = [
    {
      name: "Expertos Ambientales",
      role: "Especialistas en sostenibilidad y medio ambiente",
      icon: Leaf,
      color: "#3D7C47",
    },
    {
      name: "Educadores",
      role: "Profesionales del sector educativo",
      icon: GraduationCap,
      color: "#2C5530",
    },
    {
      name: "Líderes de Industria",
      role: "Representantes de empresas sostenibles",
      icon: Building2,
      color: "#5A8F5F",
    },
  ];

  return (
    <section id="jury" className="py-24 bg-[#F9FAF8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E8EDE7] text-[#2C5530] rounded-full text-sm mb-4">
            05
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 text-[#2C5530]">
            Nuestro Jurado
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expertos comprometidos con la evaluación justa y profesional de los
            proyectos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {juryMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div
                    className="h-48 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}cc 100%)`,
                    }}
                  >
                    <Icon
                      className="text-white/90 group-hover:scale-110 transition-transform duration-500"
                      size={72}
                      strokeWidth={1.5}
                    />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                  </div>
                  <div className="p-8">
                    <div className="w-12 h-12 rounded-full bg-[#2C5530]/10 flex items-center justify-center mb-4">
                      <Award className="text-[#2C5530]" size={24} />
                    </div>
                    <h3 className="text-2xl mb-2 text-[#2C5530]">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Evaluation Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-10 rounded-3xl shadow-lg"
        >
          <h3 className="text-3xl mb-8 text-[#2C5530] text-center">
            Criterios de Evaluación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Innovación", value: "25%" },
              { label: "Impacto Ambiental", value: "25%" },
              { label: "Viabilidad", value: "25%" },
              { label: "Presentación", value: "25%" },
            ].map((criterion, index) => (
              <motion.div
                key={criterion.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 bg-[#F9FAF8] rounded-2xl"
              >
                <div className="text-4xl mb-2 text-[#2C5530]">
                  {criterion.value}
                </div>
                <div className="text-gray-600">{criterion.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
