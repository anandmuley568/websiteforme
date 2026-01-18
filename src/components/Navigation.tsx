import { motion } from 'framer-motion';

const Navigation = () => {
  // const navItems = ['About', 'Skills', 'Projects', 'Contact', 'Study'];
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-lg"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {"<Dev />"}
          </motion.a>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link font-medium"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold glow-primary transition-all duration-300"
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;