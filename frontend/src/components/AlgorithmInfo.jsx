import React from 'react';
import { motion } from 'framer-motion';
import { Library, AlignLeft, Zap, Target, BarChart, ArrowRightCircle } from 'lucide-react';

const AlgorithmInfo = ({ algorithmInfo }) => {
  if (!algorithmInfo) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-surface-lighter/20 rounded-2xl border border-white/5 h-full">
        <Library size={48} className="text-slate-600 mb-4" />
        <p className="text-slate-400 font-medium">Concept encyclopedia awaits analysis.</p>
      </div>
    );
  }

  const sections = [
    { title: "Best Case Scenario", icon: <Target size={16}/>, content: algorithmInfo.bestCase },
    { title: "Worst Case Scenario", icon: <AlertTriangle size={16}/>, content: algorithmInfo.worstCase },
  ].filter(s => s.content);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="bg-primary-500/20 p-3 rounded-xl border border-primary-500/30">
          <Library size={24} className="text-primary-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white capitalize">{algorithmInfo.name.replace('_', ' ')}</h2>
          <p className="text-sm text-primary-400 font-medium tracking-wide uppercase mt-1">Algorithm Classification Profile</p>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl flex gap-4">
        <AlignLeft className="text-slate-400 shrink-0 mt-1" size={20} />
        <p className="text-slate-300 leading-relaxed font-light">{algorithmInfo.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div whileHover={{ y: -2 }} className="bg-surface-lighter p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-[40px] group-hover:bg-accent-500/20 transition-colors" />
          <div className="flex items-center gap-2 text-accent-400 mb-2 relative z-10">
            <Zap size={18} />
            <h4 className="font-semibold text-sm uppercase tracking-wider">Time Complexity</h4>
          </div>
          <p className="text-3xl font-bold text-white relative z-10">{algorithmInfo.timeComplexity}</p>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} className="bg-surface-lighter p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-colors" />
          <div className="flex items-center gap-2 text-blue-400 mb-2 relative z-10">
            <BarChart size={18} />
            <h4 className="font-semibold text-sm uppercase tracking-wider">Space Complexity</h4>
          </div>
          <p className="text-3xl font-bold text-white relative z-10">{algorithmInfo.spaceComplexity}</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {algorithmInfo.bestCase && (
          <div className="bg-green-500/5 border border-green-500/20 p-5 rounded-2xl">
            <h4 className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Target size={16} /> Best Case
            </h4>
            <p className="text-slate-300 font-mono">{algorithmInfo.bestCase}</p>
          </div>
        )}
        {algorithmInfo.worstCase && (
          <div className="bg-red-500/5 border border-red-500/20 p-5 rounded-2xl">
            <h4 className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
              <AlertTriangle size={16} /> Worst Case
            </h4>
            <p className="text-slate-300 font-mono">{algorithmInfo.worstCase}</p>
          </div>
        )}
      </div>

      {algorithmInfo.useCases && algorithmInfo.useCases.length > 0 && (
        <div className="glass-panel p-6 rounded-2xl">
          <h4 className="text-slate-200 font-semibold mb-4 flex items-center gap-2">
            <ArrowRightCircle size={18} className="text-primary-400" /> Practical Applications
          </h4>
          <ul className="space-y-3">
            {algorithmInfo.useCases.map((useCase, index) => (
              <motion.li 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                <span className="text-slate-300 leading-relaxed text-sm">{useCase}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

// Add AlertTriangle icon since we use it above
import { AlertTriangle } from 'lucide-react';

export default AlgorithmInfo;
