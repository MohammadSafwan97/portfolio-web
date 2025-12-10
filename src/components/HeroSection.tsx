import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImg from "../assets/profile.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#7B61FF] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E5FF] rounded-full blur-[120px] opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#7B61FF] to-[#00E5FF] rounded-full blur-[150px] opacity-20"></div>
      </div>

      {/* Floating 3D Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#7B61FF]/20 to-[#00E5FF]/20 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-[#00E5FF]/20 to-[#7B61FF]/20 rounded-full blur-2xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
            >
              <Sparkles size={16} className="text-[#00E5FF]" />
              <span className="text-sm">Available for opportunities</span>
            </motion.div>

            <h1 className="mb-6">
              <span className="block mb-2">Muhammad Safwan</span>
              <span className="gradient-text animate-gradient block">
                Full Stack AI Engineer
              </span>
            </h1>

            <p className="text-xl mb-8 max-w-xl">
              I build intelligent apps, AI agents, and full-stack systems that
              solve real problems. Specializing in scalable applications with
              cutting-edge AI integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#7B61FF] to-[#00E5FF] rounded-xl hover-glow-cyan transition-all duration-300 text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Projects
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-strong rounded-xl hover:border-[#00E5FF] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Download
                  size={20}
                  className="group-hover:text-[#00E5FF] transition-colors"
                />
                Download CV
              </motion.button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-[#94A3B8]">
              <div>
                <span className="block text-[#00E5FF] mb-1">Location</span>
                Karachi Cantt
              </div>
              <div>
                <span className="block text-[#00E5FF] mb-1">Email</span>
                mohammadsafwan248@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Glowing Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#00E5FF]/30 scale-110"
              ></motion.div>

              {/* Profile Image Container */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[400px] h-[400px] rounded-full glass-strong p-2 glow-cyan"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                  <ImageWithFallback
                    src={profileImg}
                    alt="Muhammad Safwan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Tech Icons */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 glass-strong rounded-2xl flex items-center justify-center glow-violet"
                >
                  <span className="text-2xl">🤖</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 glass-strong rounded-2xl flex items-center justify-center glow-cyan"
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
              </motion.div>

              {/* Orbit Elements */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/4 -left-20 w-12 h-12 glass rounded-xl flex items-center justify-center"
              >
                <span className="text-xl">💻</span>
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-1/4 -right-16 w-12 h-12 glass rounded-xl flex items-center justify-center"
              >
                <span className="text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#00E5FF]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#00E5FF] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
