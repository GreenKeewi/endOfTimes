import React from 'react';
import { motion } from 'framer-motion';
import { MetricItem } from '../types';
import { ProgressBar } from './ProgressBar';
import { 
  Flame, 
  Waves, 
  Cpu, 
  Orbit, 
  BookOpen, 
  Activity,
  Biohazard,
  Leaf,
  AlertTriangle,
  ArrowRight,
  FlaskConical
} from 'lucide-react';

interface MetricCardProps {
  item: MetricItem;
  index: number;
  onClick: (id: string) => void;
}

const getIcon = (type: MetricItem['iconType']) => {
  switch (type) {
    case 'religion': return <BookOpen className="w-5 h-5 text-amber-400 group-hover/icon:text-amber-300 transition-colors" />;
    case 'fire': return <Flame className="w-5 h-5 text-orange-500 group-hover/icon:text-orange-400 transition-colors" />;
    case 'water': return <Waves className="w-5 h-5 text-blue-400 group-hover/icon:text-blue-300 transition-colors" />;
    case 'tech': return <Cpu className="w-5 h-5 text-emerald-400 group-hover/icon:text-emerald-300 transition-colors" />;
    case 'asteroid': return <Orbit className="w-5 h-5 text-purple-400 group-hover/icon:text-purple-300 transition-colors" />;
    case 'bio': return <Biohazard className="w-5 h-5 text-rose-500 group-hover/icon:text-rose-400 transition-colors" />;
    case 'earth': return <Leaf className="w-5 h-5 text-green-500 group-hover/icon:text-green-400 transition-colors" />;
    case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500 group-hover/icon:text-yellow-400 transition-colors" />;
    case 'science': return <FlaskConical className="w-5 h-5 text-cyan-400 group-hover/icon:text-cyan-300 transition-colors" />;
    default: return <Activity className="w-5 h-5 text-slate-400" />;
  }
};

const getColor = (type: MetricItem['iconType']) => {
   switch (type) {
    case 'religion': return 'bg-amber-500';
    case 'fire': return 'bg-orange-600';
    case 'water': return 'bg-blue-500';
    case 'tech': return 'bg-emerald-500';
    case 'asteroid': return 'bg-purple-600';
    case 'bio': return 'bg-rose-600';
    case 'earth': return 'bg-green-600';
    case 'warning': return 'bg-yellow-600';
    case 'science': return 'bg-cyan-600';
    default: return 'bg-slate-500';
  }
};

export const MetricCard: React.FC<MetricCardProps> = ({ item, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onClick(item.id)}
      className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:bg-slate-800/40 transition-all duration-300 group cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <motion.div 
          className="p-3 bg-slate-800/50 rounded-xl group-hover/icon"
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "rgba(30, 41, 59, 0.8)",
          }}
          transition={{ duration: 0.2 }}
        >
          {getIcon(item.iconType)}
        </motion.div>
        <span className="text-2xl font-display font-bold text-slate-100">{item.percent}%</span>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-1 relative z-10 flex items-center gap-2">
        {item.name}
        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-400" />
      </h3>
      <p className="text-sm text-slate-400 mb-4 min-h-[40px] leading-snug relative z-10">{item.description}</p>
      
      <div className="relative z-10">
        <ProgressBar percent={item.percent} height="h-2" colorClass={getColor(item.iconType)} />
      </div>
    </motion.div>
  );
};