import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, AlertCircle, Award } from 'lucide-react';

const ResultPanel = ({ results }) => {
  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-surface-lighter/20 rounded-2xl border border-white/5 h-full">
        <Cpu size={48} className="text-slate-600 mb-4" />
        <p className="text-slate-400 font-medium">Awaiting analysis payload...</p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div 
      className="space-y-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-semibold text-slate-200">Analysis Summary</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.algorithm && (
          <motion.div variants={item} className="glass-card p-5 rounded-2xl border-l-4 border-l-primary-500">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary-500/20 p-2 rounded-lg">
                <Cpu size={18} className="text-primary-400" />
              </div>
              <h4 className="font-semibold text-slate-300">Detected Algorithm</h4>
            </div>
            <p className="text-xl font-bold text-white capitalize">{results.algorithm.replace('_', ' ')}</p>
          </motion.div>
        )}

        {results.complexity && (
          <motion.div variants={item} className="glass-card p-5 rounded-2xl border-l-4 border-l-accent-500">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-accent-500/20 p-2 rounded-lg">
                <Zap size={18} className="text-accent-400" />
              </div>
              <h4 className="font-semibold text-slate-300">Time Complexity</h4>
            </div>
            <p className="text-xl font-bold text-white">{results.complexity}</p>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.score !== undefined && (
          <motion.div variants={item} className="glass-card p-5 rounded-2xl border-b-2 border-b-green-500">
            <div className="flex justify-between items-center bg-surface p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <Award size={20} className="text-green-400" />
                <h4 className="font-medium text-slate-300">Quality Score</h4>
              </div>
              <span className="text-3xl font-black text-green-400">{results.score}<span className="text-base text-slate-500">/100</span></span>
            </div>
          </motion.div>
        )}

        {results.bugs && results.bugs.length > 0 && (
          <motion.div variants={item} className="glass-card p-5 rounded-2xl border border-red-500/30 bg-red-500/5">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={18} className="text-red-400" />
              <h4 className="font-semibold text-red-200">Total Issues Detected</h4>
            </div>
            <p className="text-3xl font-black text-red-400">{results.bugs.length}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ResultPanel;
