import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { submitInscription } from "../../lib/submitInscription";
import { motion } from "motion/react";


const emptyForm = {
  teamName: "",
  school: "",
  leader: "",
  email: "",
  phone: "",
  members: "",
};

export function Registration() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState(emptyForm);
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim() !== "") return;
    setIsSubmitting(true);
    const result = await submitInscription(formData);
    if (result.ok) {
      toast.success(
        "¡Registro confirmado! Tu inscripción se guardó correctamente en la hoja CASB.",
      );
      setFormData(emptyForm);
    } else if (result.reason === "config") {
      toast.error(
        "El envío no está configurado en el sitio. Contacta al organizador del concurso.",
      );
    } else {
      toast.error(
        "No se pudo guardar el registro. Revisa tu conexión e inténtalo de nuevo.",
      );
    }
    setIsSubmitting(false);
  };

  return (
    <section id="register" className="py-24 bg-[#F9FAF8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E8EDE7] text-[#2C5530] rounded-full text-sm mb-4">
            03
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 text-[#2C5530]">
            Inscripción
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Únete a la transformación de Barranquilla
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl mb-4 text-[#2C5530]">
                Requisitos del Equipo
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#2C5530] rounded-full mt-2 mr-3" />
                  <span>
                    <strong>2 a 5 estudiantes</strong> por grupo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#2C5530] rounded-full mt-2 mr-3" />
                  <span>
                    <strong>Edades:</strong> Entre 14 y 18 años
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#2C5530] rounded-full mt-2 mr-3" />
                  <span>
                    <strong>Costo:</strong> Aproximadamente 30,000 COP por grupo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#2C5530] rounded-full mt-2 mr-3" />
                  <span>
                    Proyecto relacionado con sostenibilidad y medio ambiente
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#2C5530] to-[#3D7C47] p-8 rounded-3xl shadow-lg text-white">
              <h3 className="text-2xl mb-4">Beneficios</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                  <span>Mejora en calificaciones escolares</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                  <span>Desarrollo de habilidades clave</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                  <span>Reconocimiento público</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                  <span>Premios y certificados</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3" />
                  <span>Oportunidad de impactar tu ciudad</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFB84D]/10 border border-[#FFB84D]/30 p-6 rounded-2xl">
              <p className="text-gray-700">
                <strong className="text-[#2C5530]">Nota:</strong> Los equipos
                deben presentar videos del desarrollo del proyecto para
                credibilidad y evidencia del trabajo realizado.
              </p>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-white p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-[#2C5530]">
                Formulario de Registro
              </h3>

              <div className="space-y-5">
                <div
                  className="absolute left-0 top-0 h-px w-px overflow-hidden opacity-0"
                  aria-hidden
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Nombre del Equipo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C5530] transition-all"
                    value={formData.teamName}
                    onChange={(e) =>
                      setFormData({ ...formData, teamName: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Colegio *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C5530] transition-all"
                    value={formData.school}
                    onChange={(e) =>
                      setFormData({ ...formData, school: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Nombre del Líder del Equipo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C5530] transition-all"
                    value={formData.leader}
                    onChange={(e) =>
                      setFormData({ ...formData, leader: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C5530] transition-all"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Teléfono de Contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C5530] transition-all"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Nombres de los Miembros del Equipo *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Escribe los nombres de todos los miembros del equipo (2-5 personas)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C5530] transition-all resize-none"
                    value={formData.members}
                    onChange={(e) =>
                      setFormData({ ...formData, members: e.target.value })
                    }
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#2C5530] text-white rounded-xl hover:bg-[#3D7C47] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={22} />
                      Enviando…
                    </>
                  ) : (
                    "Registrarse Ahora"
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  Al registrarte, aceptas participar bajo las reglas del
                  concurso
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
