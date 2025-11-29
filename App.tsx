import React, { useState, useEffect } from 'react';
import { APP_CONFIG } from './constants';
import { HomePage } from './components/HomePage';
import { DetailPage } from './components/DetailPage';
import { MetricItem } from './types';
import { ShareButton } from './components/ShareButton';

const App: React.FC = () => {
  // Simple state-based routing
  const [currentView, setCurrentView] = useState<'home' | 'detail'>('home');
  const [selectedMetricId, setSelectedMetricId] = useState<string | null>(null);

  // Handle URL history for better UX (Back button support)
  useEffect(() => {
    // Check initial URL params
    const params = new URLSearchParams(window.location.search);
    const metricId = params.get('metric');
    if (metricId) {
      const metricExists = [...APP_CONFIG.religions, ...APP_CONFIG.science].some(m => m.id === metricId);
      if (metricExists) {
        setSelectedMetricId(metricId);
        setCurrentView('detail');
      }
    }

    const handlePopState = (event: PopStateEvent) => {
      // Prioritize event state, fallback to URL params
      if (event.state) {
        setCurrentView(event.state.view || 'home');
        setSelectedMetricId(event.state.id || null);
      } else {
        const params = new URLSearchParams(window.location.search);
        const metricId = params.get('metric');
        if (metricId) {
          setSelectedMetricId(metricId);
          setCurrentView('detail');
        } else {
          setCurrentView('home');
          setSelectedMetricId(null);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (id: string) => {
    const metric = [...APP_CONFIG.religions, ...APP_CONFIG.science].find(m => m.id === id);
    if (metric) {
      setSelectedMetricId(id);
      setCurrentView('detail');
      
      // Use query parameters instead of paths to avoid 404s/SecurityErrors in sandboxes
      const newUrl = `?metric=${id}`;
      try {
        window.history.pushState({ view: 'detail', id }, '', newUrl);
      } catch (e) {
        console.warn('History API not available:', e);
      }
    }
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedMetricId(null);
    try {
      window.history.pushState({ view: 'home' }, '', window.location.pathname);
    } catch (e) {
      console.warn('History API not available:', e);
    }
  };

  const getSelectedMetric = (): MetricItem | undefined => {
    return [...APP_CONFIG.religions, ...APP_CONFIG.science].find(m => m.id === selectedMetricId);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-rose-500/30 selection:text-rose-200 overflow-x-hidden relative">
      
      {/* Global Share Button */}
      <div className="fixed top-4 right-4 z-50">
        <ShareButton position="bottom-right" className="bg-slate-900/90" />
      </div>

      {currentView === 'home' ? (
        <HomePage onNavigate={handleNavigate} />
      ) : (
        selectedMetricId && getSelectedMetric() ? (
          <DetailPage item={getSelectedMetric()!} onBack={handleBack} />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        )
      )}
    </div>
  );
};

export default App;