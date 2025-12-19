import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'Virtual University of Pakistan',
    location: '',
    period: '2023 - 2027 (Expected)',
    status: 'In Progress',
    icon: GraduationCap,
    highlights: [
      'Strong foundation in software engineering principles and system design',
      'Relevant coursework includes Data Structures, Algorithms, and Database Systems, Web Design & Development',
      'Hands-on experience building web applications and AI-powered systems'
    ]
  },
  {
    degree: 'Pre-Engineering',
    institution: 'FG Boys Inter College Karachi Cantt',
    location: 'Karachi, Pakistan',
    period: '2015 - 2019',
    status: 'Completed',
    icon: BookOpen,
    highlights: [
      'Strong foundation in mathematics and physics',
      'Developed analytical thinking and problem-solving skills'
    ]
  }
];

export function EducationSection() {
  return (
    <section id="education" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <p className="max-w-3xl mx-auto">
            Academic foundation in software engineering and applied computer science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7B61FF] via-[#00E5FF] to-[#7B61FF] hidden md:block"></div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 lg:mb-16 ${
                  index % 2 === 0
                    ? 'lg:pr-[calc(50%+3rem)]'
                    : 'lg:pl-[calc(50%+3rem)]'
                }`}
              >
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full glass-strong border-4 border-[#00E5FF] flex items-center justify-center glow-cyan">
                    <edu.icon size={28} className="text-[#00E5FF]" />
                  </div>
                </div>

                <div className="glass-strong rounded-2xl p-6 lg:p-8 border-2 border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4 lg:hidden mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#00E5FF] flex items-center justify-center flex-shrink-0">
                      <edu.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-[#00E5FF]" />
                        <span className="text-sm text-[#94A3B8]">{edu.period}</span>
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full text-xs bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                        {edu.status}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center justify-between mb-4">
                    <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                      {edu.status}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                      <Calendar size={16} className="text-[#00E5FF]" />
                      {edu.period}
                    </div>
                  </div>

                  <h3 className="mb-2 group-hover:text-[#00E5FF] transition-colors">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 mb-4 text-[#94A3B8]">
                    <GraduationCap size={18} className="text-[#7B61FF]" />
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>

                  <div className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-[#94A3B8]">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="hidden lg:block absolute top-8 w-8 h-0.5 bg-gradient-to-r from-[#7B61FF] to-[#00E5FF]"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: 'calc(50% + 2rem)',
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center glass rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h4 className="mb-4">Continuous Learning</h4>
         <p className="text-[#94A3B8]">
  Beyond formal education, I actively develop my expertise through hands-on projects,
  technical certifications, and continuous self-learning, with a strong focus on modern
  software engineering practices and AI-driven systems.
</p>

        </motion.div>
      </div>
    </section>
  );
}
