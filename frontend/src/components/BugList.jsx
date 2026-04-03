import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertOctagon, AlertTriangle, Info, Lightbulb } from 'lucide-react';

const BugList = ({ bugs }) => {
  if (!bugs || bugs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-surface-lighter/20 rounded-2xl border border-white/5 h-full">
        <ShieldCheck size={48} className="text-green-500/50 mb-4" />
        <h3 className="text-xl font-semibold text-green-400 mb-2">Zero Vulnerabilities Detected</h3>
        <p className="text-slate-400 max-w-sm">Your algorithm structurally analyzes perfectly with no logic bugs or vulnerabilities.</p>
      </div>
    );
  }

  const getSeverityStyles = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'critical': 
        return { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', icon: <AlertOctagon size={16}/> };
      case 'warning': 
        return { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', icon: <AlertTriangle size={16}/> };
      case 'info': 
      default:
        return { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: <Info size={16}/> };
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-slate-200">Diagnostics Review</h3>
        <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
          {bugs.length} Issues Found
        </div>
      </div>
      
      <div className="space-y-4">
        {bugs.map((bug, index) => {
          const styles = getSeverityStyles(bug.severity);
          return (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className={`glass-card p-5 rounded-2xl border-l-4 ${styles.border.replace('30', '100')} group`}
            >
              <div className="flex justify-between items-start mb-3 gap-4">
                <h4 className="font-semibold text-slate-200 text-lg leading-tight group-hover:text-white transition-colors">{bug.title}</h4>
                <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap ${styles.bg} ${styles.color} border ${styles.border}`}>
                  {styles.icon}
                  {bug.severity}
                </span>
              </div>
              
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{bug.description}</p>
              
              {bug.line && (
                <div className="mb-4 font-mono text-sm bg-surface/50 p-3 rounded-xl border border-white/5 flex gap-4">
                  <span className="text-slate-500 select-none">{bug.line}</span>
                  <span className="text-red-300 font-medium">{bug.codeSnippet}</span>
                </div>
              )}
              
              {bug.suggestion && (
                <div className="mt-2 p-4 bg-primary-500/5 rounded-xl border border-primary-500/20 flex gap-3 items-start">
                  <Lightbulb size={20} className="text-primary-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-primary-300 mb-1">Resolution Suggestion</h5>
                    <p className="text-sm text-primary-200 opacity-80 leading-relaxed">{bug.suggestion}</p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BugList;
