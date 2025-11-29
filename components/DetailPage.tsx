import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Activity, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { MetricItem } from '../types';
import { ProgressBar } from './ProgressBar';
import { AdSpace } from './AdSpace';
import { ShareButton } from './ShareButton';

interface DetailPageProps {
  item: MetricItem;
  onBack: () => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({ item, onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isTimeline = !!item.details.timeline;
  
  // Construct a safe URL for sharing
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}?metric=${item.id}` : '';

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans pb-20">
      {/* Background Ambience - simpler for detail page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-black" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-indigo-950/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12"
        >
          <div className="p-2 rounded-full bg-slate-900 border border-slate-700 group-hover:border-white/50 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium tracking-wide uppercase">Back to Dashboard</span>
        </button>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white">{item.name}</h1>
              <div className="md:hidden">
                <ShareButton url={shareUrl} />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 flex items-center gap-3">
                <span className="text-sm text-slate-400 uppercase tracking-widest">Severity</span>
                <span className={`text-xl font-bold ${item.percent > 70 ? 'text-rose-500' : 'text-amber-500'}`}>
                  {item.percent}%
                </span>
              </div>
              <div className="hidden md:block">
                 <ShareButton url={shareUrl} />
              </div>
            </div>
          </div>
          
          <ProgressBar percent={item.percent} height="h-2" colorClass={item.percent > 70 ? "bg-rose-600" : "bg-indigo-600"} />
          
          <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-3xl">
            {item.details.intro}
          </p>
        </motion.header>

        <AdSpace type="banner" className="mb-16" />

        {/* Content Section */}
        {isTimeline ? (
          <section>
            <div className="flex items-center gap-3 mb-10">
              <Clock className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold">Eschatological Timeline</h2>
            </div>
            
            <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12 pb-12">
              {item.details.timeline?.map((event, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-12"
                >
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${event.year === 'Current' || event.year === 'Observed' ? 'bg-rose-500 border-rose-900 shadow-[0_0_10px_rgba(244,63,94,0.6)]' : 'bg-slate-900 border-slate-600'}`}></div>
                  
                  <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-2 ${event.year === 'Current' || event.year === 'Observed' ? 'bg-rose-950/50 text-rose-400 border border-rose-900/50' : 'bg-slate-800 text-slate-400'}`}>
                    {event.year}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-200 mb-2">{event.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        ) : (
          <section>
            <div className="flex items-center gap-3 mb-10">
              <Activity className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Scientific Evidence & Risk Factors</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.details.evidence?.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{point.label}</span>
                    <div className="flex items-center gap-1">
                      {point.trend === 'up' && <TrendingUp className="w-4 h-4 text-rose-500" />}
                      {point.trend === 'down' && <TrendingDown className="w-4 h-4 text-emerald-500" />}
                      {point.trend === 'stable' && <Minus className="w-4 h-4 text-slate-500" />}
                    </div>
                  </div>
                  
                  <div className="text-3xl font-display font-bold text-white mb-3">{point.value}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};