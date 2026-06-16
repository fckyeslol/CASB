import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/equipo-3.jpg"
          alt="Equipo CASB al atardecer en Barranquilla"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C5530]/80 via-[#2C5530]/60 to-[#2C5530]/80" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-[#8FA988]/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#E8EDE7]/20 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl mb-6 text-white tracking-tight">
            CASB
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 text-[#E8EDE7]">
            Jóvenes transformando Barranquilla
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            El concurso donde las ideas de los jóvenes se convierten en
            soluciones reales para la ciudad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={scrollToRegister}
            className="px-10 py-4 bg-white text-[#2C5530] rounded-full hover:bg-[#E8EDE7] transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Inscribirse
          </button>
          <button
            onClick={scrollToAbout}
            className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
          >
            Ver más
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}
