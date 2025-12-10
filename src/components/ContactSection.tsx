import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in production, this would connect to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      href: 'https://linkedin.com/in/themuhammadsafwan-',
      color: '#0A66C2'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/MuhammadSafwan97',
      color: '#FFFFFF'
    }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00E5FF] rounded-full blur-[150px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="max-w-3xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#00E5FF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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

              {/* Social Links */}
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
                      <social.icon size={24} className="group-hover:text-[#00E5FF] transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-8 relative h-32 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/20 to-[#00E5FF]/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">💬</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-3xl p-8 lg:p-10 border-2 border-[#7B61FF]/20 relative overflow-hidden">
              {/* Neon Outline Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7B61FF] to-[#00E5FF]"></div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00E5FF] flex items-center justify-center mb-6 glow-cyan">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h3 className="mb-2 text-center">Message Sent!</h3>
                  <p className="text-[#94A3B8] text-center">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-[#94A3B8]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-all bg-white/5"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-[#94A3B8]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-all bg-white/5"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-[#94A3B8]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-[#00E5FF] focus:outline-none transition-all resize-none bg-white/5"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#7B61FF] to-[#00E5FF] rounded-xl hover-glow-cyan transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
