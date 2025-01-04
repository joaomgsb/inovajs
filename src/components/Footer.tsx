import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Transformando Ideias Em Resultados Digitais
          </h3>
          <p className="text-gray-300">
            {`© ${currentYear} Inova.js. Todos Os Direitos Reservados.`}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};