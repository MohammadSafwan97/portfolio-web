import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohammadsafwan248@gmail.com',
      href: 'mailto:mohammadsafwan248@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 301 1784166',
      href: 'tel:+923011784166'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi Cantt, Pakistan',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/themuhammadsafwan-'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/MohammadSafwan97'
    }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00E5FF] rounded-full blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[30px]">
            Open To <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="max-w-3xl mx-auto">
            I&apos;m actively looking for full-stack development opportunities.  
            The contact form will be enabled soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-3xl p-8 lg:p-10 border-2 border-[#00E5FF]/20 h-full">
              <h3 className="mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#00E5FF] flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#94A3B8] mb-1">{info.label}</div>
                      <div className="group-hover:text-[#00E5FF] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 glass-strong rounded-xl flex items-center justify-center hover:border-[#00E5FF] transition-all group"
                      title={social.label}
                    >
                      <social.icon
                        size={24}
                        className="group-hover:text-[#00E5FF] transition-colors"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-3xl p-8 lg:p-10 border-2 border-[#7B61FF]/20 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7B61FF] to-[#00E5FF]"></div>

              <div className="space-y-6 opacity-60 pointer-events-none">
                <div>
                  <label className="block text-sm mb-2 text-[#94A3B8]">Your Name</label>
                  <input
                    disabled
                    className="w-full px-4 py-3 glass rounded-xl border border-white/10 bg-white/5"
                    placeholder="Disabled"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#94A3B8]">Email Address</label>
                  <input
                    disabled
                    className="w-full px-4 py-3 glass rounded-xl border border-white/10 bg-white/5"
                    placeholder="Disabled"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#94A3B8]">Message</label>
                  <textarea
                    disabled
                    rows={6}
                    className="w-full px-4 py-3 glass rounded-xl border border-white/10 resize-none bg-white/5"
                    placeholder="Contact form will be available soon"
                  />
                </div>

                <button
                  disabled
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#7B61FF] to-[#00E5FF] rounded-xl flex items-center justify-center gap-3 cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>

              <p className="mt-6 text-sm text-center text-[#94A3B8]">
                Prefer email or LinkedIn for now. The form will be activated later.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
