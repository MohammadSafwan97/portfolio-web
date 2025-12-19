import { motion } from 'framer-motion';
import { Award, Shield, GraduationCap, Cloud, Brain, Lock, Code } from 'lucide-react';

const certifications = [
  {
    name: 'Meta',
    title: 'Full Stack Developer',
    icon: Code,
    color: '#0084FF',
    year: ''
  },
  {
    name: 'IBM',
    title: 'AI Developer',
    icon: Brain,
    color: '#006699',
    year: ''
  },
  {
    name: 'Vanderbilt',
    title: 'AI Agent Developer',
    icon: Brain,
    color: '#866D4B',
    year: ''
  },
  {
    name: 'AWS',
    title: 'Cloud Practitioner',
    icon: Cloud,
    color: '#FF9900',
    year: ''
  },
  {
    name: 'Google',
    title: 'AI Essentials',
    icon: Brain,
    color: '#4285F4',
    year: ''
  },
  {
    name: 'IBM',
    title: 'Ethical Hacking',
    icon: Lock,
    color: '#006699',
    year: ''
  },
  {
    name: 'Cisco',
    title: 'C++ Programming',
    icon: Code,
    color: '#1BA0D7',
    year: ''
  }
  ,
  {
    name: 'Google',
    title: 'Google AI Essentials',
    icon: Code,
    color: '#1BA0D7',
    year: ''
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7B61FF] rounded-full blur-[120px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="mb-4 text-[30px]">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="max-w-3xl mx-auto">
            Recognized credentials from leading technology companies
          </p>
        </motion.div>

        {/* Desktop View - Horizontal Scroll */}
        <div className="hidden lg:block relative">
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {certifications.map((cert, index) => (
              <motion.div
                key={`${cert.name}-${cert.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-72"
              >
                <div className="glass-strong rounded-2xl p-6 border-2 border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}44)`,
                        border: `2px solid ${cert.color}66`
                      }}
                    >
                      <cert.icon size={28} style={{ color: cert.color }} />
                    </div>
                    <div className="glass rounded-full px-3 py-1 text-xs text-[#94A3B8]">
                      {cert.year}
                    </div>
                  </div>
                  
                  <h4 className="mb-2" style={{ color: cert.color }}>
                    {cert.name}
                  </h4>
                  <p className="text-sm text-[#94A3B8]">{cert.title}</p>
                  
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#00E5FF]">
                    <Shield size={14} />
                    <span>Verified Credential</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View - Grid */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={`${cert.name}-${cert.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong rounded-2xl p-6 border-2 border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}44)`,
                    border: `2px solid ${cert.color}66`
                  }}
                >
                  <cert.icon size={24} style={{ color: cert.color }} />
                </div>
                <div className="glass rounded-full px-3 py-1 text-xs text-[#94A3B8]">
                  {cert.year}
                </div>
              </div>
              
              <h4 className="mb-2 text-lg" style={{ color: cert.color }}>
                {cert.name}
              </h4>
              <p className="text-sm text-[#94A3B8]">{cert.title}</p>
              
              <div className="mt-4 flex items-center gap-2 text-xs text-[#00E5FF]">
                <Shield size={14} />
                <span>Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="text-[#00E5FF]" size={24} />
                <div className="text-3xl gradient-text">7</div>
              </div>
              <div className="text-sm text-[#94A3B8]">Total Certifications</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <GraduationCap className="text-[#7B61FF]" size={24} />
                <div className="text-3xl gradient-text">6</div>
              </div>
              <div className="text-sm text-[#94A3B8]">Global Institutions</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Brain className="text-[#00E5FF]" size={24} />
                <div className="text-3xl gradient-text">4</div>
              </div>
              <div className="text-sm text-[#94A3B8]">AI Certifications</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="text-[#7B61FF]" size={24} />
                <div className="text-3xl gradient-text">100%</div>
              </div>
              <div className="text-sm text-[#94A3B8]">Verified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
