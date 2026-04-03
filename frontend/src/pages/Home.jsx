import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Zap, Activity, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col justify-center">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-accent-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20 relative z-10 flex-1 flex flex-col justify-center">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium mb-8">
            <Cpu size={16} />
            <span>Intelligent Algorithm Engine</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
            Code intelligence<br/>
            <span className="text-gradient">redefined.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Detect hidden bugs, analyze exact space-time complexity, and comprehend 
            execution flow through beautiful interactive visualizations.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/analyzer"
              className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Start Analyzing
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-32 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              icon: <ShieldCheck className="text-primary-400" size={32} />,
              title: "Smart Detection",
              desc: "Instantly identify algorithms and pinpoint logical vulnerabilities with our advanced AST parsing."
            },
            {
              icon: <Activity className="text-accent-400" size={32} />,
              title: "Complexity Oracle",
              desc: "Get incredibly precise Big-O time and space complexity scoring derived from structural analysis."
            },
            {
              icon: <Code2 className="text-pink-400" size={32} />,
              title: "Live Execution Mapping",
              desc: "Step directly through state transformations with beautiful, interactive data structure visuals."
            }
          ].map((feature, i) => (
            <motion.div key={i} variants={itemVariants} className="glass-panel p-8 rounded-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="bg-surface-lighter w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
