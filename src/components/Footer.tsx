import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              
              <span className="font-semibold">Muhammad Safwan</span>
            </div>
            <p className="text-sm text-[#94A3B8]">
              Aspiring Full Stack Developer focused on building scalable web applications
              and intelligent systems using modern technologies.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#00E5FF] transition-colors inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <a
                  href="mailto:mohammadsafwan248@gmail.com"
                  className="hover:text-[#00E5FF] transition-colors"
                >
                  mohammadsafwan248@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923011784166"
                  className="hover:text-[#00E5FF] transition-colors"
                >
                  +92 301 1784166
                </a>
              </li>
              <li>Karachi Cantt, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[#94A3B8]">
              © {currentYear} Muhammad Safwan. All rights reserved.
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-[#94A3B8]"
            >
              <span>Built with</span>
              <Heart size={14} className="text-red-500 fill-red-500" />
              <span>and</span>
              <Code2 size={14} className="text-[#00E5FF]" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7B61FF] via-[#00E5FF] to-[#7B61FF] opacity-50"></div>
    </footer>
  );
}
