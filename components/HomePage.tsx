import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Info, Mail, Shield, AlertTriangle } from 'lucide-react';
import { APP_CONFIG } from '../constants';
import { ProgressBar } from './ProgressBar';
import { MetricCard } from './MetricCard';
import { AdSpace } from './AdSpace';

interface HomePageProps {
  onNavigate: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const gradientY = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <div className="relative min-h-screen">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black opacity-80" 
        />
        <motion.div 
          style={{ y: gradientY }}
          className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-rose-900/10 to-transparent" 
        />
        {/* Stars/Dust effect */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute w-full h-[150%] -top-[10%] opacity-30" 
        >
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/30 border border-rose-900/50 text-rose-400 text-xs font-medium mb-6 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            Live Estimation
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-indigo-200 mb-6 drop-shadow-2xl">
            How Close Is The End?
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            An aggregate calculation of humanity's progress toward the "End of Times" based on ancient prophecy and modern existential risk models.
          </p>
        </motion.header>

        {/* Top Ad */}
        <div className="mb-20">
          <AdSpace type="banner" />
        </div>

        {/* Central Main Progress */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="group relative flex justify-between items-end mb-4">
              <div className="flex items-center gap-2 cursor-help">
                <h2 className="text-2xl font-display font-semibold text-white border-b border-dashed border-slate-600 group-hover:border-rose-500 transition-colors">
                  Global Doom Index
                </h2>
                <Info className="w-4 h-4 text-slate-500 group-hover:text-rose-500 transition-colors" />
                
                {/* Tooltip */}
                <div className="absolute top-full left-0 mt-3 w-72 p-4 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-lg shadow-2xl text-sm text-slate-300 opacity-0 transform -translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                  <div className="absolute -top-1.5 left-8 w-3 h-3 bg-slate-900 border-l border-t border-slate-700 transform rotate-45"></div>
                  <p className="leading-relaxed">
                    This index is a weighted aggregate of all tracked theological milestones and scientific probability models found below. See "How We Calculate The End" for details.
                  </p>
                </div>
              </div>

              <span className="text-6xl font-display font-bold text-accent-primary drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]">
                {APP_CONFIG.globalCompletion}%
              </span>
            </div>
            
            <div className="relative">
              <ProgressBar 
                percent={APP_CONFIG.globalCompletion} 
                height="h-12" 
                colorClass="bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600" 
              />
              <div className="flex justify-between mt-2 text-xs uppercase tracking-wider text-slate-500 font-mono">
                <span>Civilization Start</span>
                <span>The End</span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 p-4 rounded-lg bg-rose-950/20 border border-rose-900/30 flex gap-3 items-start"
            >
              <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <p className="text-sm text-rose-200/80">
                <strong className="text-rose-200">Warning:</strong> The index has increased by 0.4% in the last fiscal quarter due to rising geopolitical tensions and climate anomalies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Scientific Risks Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-700"></div>
            <h2 className="text-2xl font-display font-bold text-slate-200">Scientific Probability</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-700"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APP_CONFIG.science.map((item, idx) => (
              <MetricCard key={item.id} item={item} index={idx} onClick={onNavigate} />
            ))}
          </div>
        </section>

        {/* Mid Ad */}
        <div className="mb-20">
          <AdSpace type="banner" className="bg-gradient-to-r from-indigo-900/10 to-rose-900/10" />
        </div>

        {/* Religious Prophecy Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-700"></div>
            <h2 className="text-2xl font-display font-bold text-slate-200">Theological Timelines</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-700"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APP_CONFIG.religions.map((item, idx) => (
              <MetricCard key={item.id} item={item} index={idx + 4} onClick={onNavigate} />
            ))}
          </div>
        </section>

        {/* Methodology / Explanation */}
        <section className="mb-20 max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Info className="text-indigo-400 w-6 h-6" />
            <h2 className="text-2xl font-display font-bold">How We Calculate The End</h2>
          </div>
          
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              This website serves as a symbolic visualization of humanity's existential status. The "Global Doom Index" is a weighted average derived from two primary datasets:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-indigo-500">
              <li>
                <strong className="text-white">Theological Escatology:</strong> Comparison of current events against prophetic milestones described in major world religious texts (e.g., The Book of Revelation, Quranic Hadiths, The Puranas).
              </li>
              <li>
                <strong className="text-white">Scientific Risk Models:</strong> Quantitative probability estimates of existential risks (x-risk) from organizations studying climate change, AI alignment, and astronomical threats.
              </li>
            </ul>
            <p className="text-sm text-slate-500 mt-6 pt-6 border-t border-slate-800 italic">
              * Note: This tool is for educational and entertainment purposes. The actual date of the "End of Times" remains unknown to human calculation.
            </p>
          </div>
        </section>

        {/* Bottom Ad Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <AdSpace type="rectangle" />
          <AdSpace type="rectangle" />
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-12 pb-8 text-center text-slate-500 text-sm">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-rose-400 transition-colors flex items-center gap-2">
              <Mail className="w-3 h-3" /> Contact
            </a>
            <a href="#" className="hover:text-rose-400 transition-colors flex items-center gap-2">
              <Shield className="w-3 h-3" /> Disclaimer
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} EndTimesTracker. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">Stay prepared. Stay kind.</p>
        </footer>

      </div>
    </div>
  );
};