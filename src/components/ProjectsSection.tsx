import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Django Restaurant Management System",
    description:
      "Full-featured restaurant management system enabling online ordering, table reservations, menu administration, and customer reviews, built using Django and RESTful APIs.",
    image:
      "https://images.unsplash.com/photo-1722739541715-1d59cde9cca4?fm=jpg&q=80&w=1080",
    tech: ["Django", "Python", "SQLite", "Tailwind", "REST API"],
    github: "https://github.com/MohammadSafwan97/Django-Restraunt-App",
    demo: "https://django-restraunt-app.onrender.com/",
    actions: { code: true, demo: true },
  },
  {
    title: "Medical RAG-Based AI Chatbot",
    description:
      "AI-powered medical assistant leveraging Retrieval-Augmented Generation (RAG) to deliver context-aware responses from embedded medical documents, improving accuracy and reducing hallucinations.",
    image:
      "https://images.unsplash.com/photo-1758202292826-c40e172eed1c?fm=jpg&q=80&w=1080",
    tech: ["Python", "LangChain", "Pinecone", "Flask", "RAG"],
    github: "#",
    demo: "",
    actions: { code: true, demo: false },
  },
  {
    title: "Restaurant AI Ordering Assistant",
    description:
      "Conversational AI assistant that enables customers to browse menus, check prices, place orders, and ask questions using natural language with AI-driven responses and structured business logic.",
    image: "../assets/RestaurantAI.png",
    tech: ["LangChain", "OpenAI API", "Flask", "TailwindCSS"],
    github: "#",
    demo: "https://chatbot-git-main-mohammadsafwan97s-projects.vercel.app/",
    actions: { code: true, demo: true },
  },
  {
    title: "Jarvis Voice AI Assistant",
    description:
      "Voice-enabled AI assistant supporting natural language understanding, task automation, API integrations, and speech-based interaction.",
    image:
      "https://images.unsplash.com/photo-1562851529-c370841f6536?fm=jpg&q=80&w=1080",
    tech: ["Python", "Speech Recognition", "NLP", "APIs"],
    github: "#",
    demo: "",
    actions: { code: true, demo: false },
  },
  {
    title: "Full-Stack E-Commerce Platform with AI Chatbot",
    description:
      "Production-ready e-commerce platform with secure authentication, Stripe payments, product management, and an AI-powered chatbot for customer support.",
    image:
      "https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?fm=jpg&q=80&w=1080",
    tech: ["React", "Node.js", "Flask", "OpenAI API", "Langchain"],
    github: "#",
    demo: "https://fullstack-react-ecommerce-3wt6.vercel.app",
    actions: { code: true, demo: true },
  },
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<any | null>(null);

  return (
    <section id="projects" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-3xl mx-auto">
            Real-world applications demonstrating full-stack and AI engineering expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="h-full flex flex-col bg-[#1A2B4A] rounded-2xl border-4 border-white/20 overflow-hidden hover:border-[#00E5FF] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h4 className="mb-3">{project.title}</h4>
                  <p className="text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-lg text-xs text-[#00E5FF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full bg-[#0F172A] rounded-2xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X />
              </button>

              <ImageWithFallback
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-56 object-cover rounded-xl mb-6"
              />

              <h3 className="mb-3">{activeProject.title}</h3>
              <p className="text-sm mb-6 text-justify">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-lg text-xs text-[#00E5FF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {activeProject.actions.code && (
                  <a
                    href={activeProject.github}
                    className="flex items-center gap-2 px-4 py-2 glass-strong rounded-xl"
                  >
                    <Github size={16} />
                    <span className="text-sm">View Code</span>
                  </a>
                )}
                {activeProject.actions.demo && (
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7B61FF] to-[#00E5FF] rounded-xl"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">View Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
