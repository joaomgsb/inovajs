import { motion } from "framer-motion";

const stats = [
  { number: "100+", label: "Projetos Entregues" },
  { number: "95%", label: "Clientes Satisfeitos" },
  { number: "24/7", label: "Suporte Técnico" },
];

export const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="text-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full group-hover:blur-3xl transition-all duration-300" />
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xl text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};