import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useInView } from "./useInView";

export function Video() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="video" className="relative py-24 bg-[#2C5530] overflow-hidden" ref={ref}>
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8FA988]/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-[#E8EDE7] rounded-full text-sm mb-4">
            <Play size={14} /> Reel
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 text-white">
            Mira CASB en acción
          </h2>
          <p className="text-xl text-[#E8EDE7]/90 max-w-3xl mx-auto leading-relaxed">
            Conoce de qué se trata el concurso y súmate a transformar Barranquilla.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[340px]">
            <video
              src="/casb-video.mp4"
              className="w-full aspect-[9/16] object-cover rounded-3xl shadow-2xl bg-black"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#8FA988]/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#E8EDE7]/20 rounded-full blur-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
