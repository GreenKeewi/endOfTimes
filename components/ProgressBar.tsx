import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  percent: number;
  height?: string;
  colorClass?: string;
  showLabel?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  percent, 
  height = 'h-4', 
  colorClass = 'bg-accent-primary',
  showLabel = false
}) => {
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between mb-2 text-sm font-medium text-slate-300">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-800 rounded-full overflow-hidden ${height} shadow-inner border border-slate-700/50`}>
        <motion.div
          className={`${height} ${colorClass} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -skew-x-12 animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
};