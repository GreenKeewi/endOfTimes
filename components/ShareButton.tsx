import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  url?: string;
  className?: string;
  tooltipText?: string;
  position?: 'bottom-left' | 'bottom-right' | 'left' | 'right';
}

export const ShareButton: React.FC<ShareButtonProps> = ({ 
  url, 
  className = '', 
  tooltipText = 'Share this page',
  position = 'bottom-left'
}) => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleShare = async () => {
    // If url is provided, use it. Otherwise use current window location.
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

    // Fallback function using deprecated execCommand which often works better in iframes/sandboxes
    // where the document might not technically have focus for the Clipboard API.
    const fallbackCopyTextToClipboard = (text: string) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      
      // Ensure it's not visible but part of DOM to allow selection
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
           console.error('Fallback: Copying text command was unsuccessful');
        }
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      
      document.body.removeChild(textArea);
    };
    
    // Try Modern API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.warn('Clipboard API failed (likely focus issue), trying fallback:', err);
        fallbackCopyTextToClipboard(shareUrl);
      }
    } else {
      fallbackCopyTextToClipboard(shareUrl);
    }
  };

  const getTooltipPosition = () => {
    switch(position) {
      case 'bottom-right': return 'top-full right-0 mt-2';
      case 'left': return 'top-1/2 right-full -translate-y-1/2 mr-2';
      case 'right': return 'top-1/2 left-full -translate-y-1/2 ml-2';
      default: return 'top-full right-0 md:left-0 mt-2'; // Default handles responsive align
    }
  };

  return (
    <div className="relative z-50 inline-block">
      <motion.button
        onClick={handleShare}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2.5 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-700 transition-all shadow-lg flex items-center justify-center ${className}`}
        aria-label="Share"
      >
        <AnimatePresence mode='wait'>
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 45 }}
            >
              <Check className="w-5 h-5 text-emerald-400" />
            </motion.div>
          ) : (
            <motion.div
              key="share"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -45 }}
            >
              <Share2 className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {(hovered && !copied) && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            className={`absolute ${getTooltipPosition()} px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-md text-xs font-medium text-slate-300 whitespace-nowrap pointer-events-none shadow-xl z-50`}
          >
            {tooltipText}
          </motion.div>
        )}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            className={`absolute ${getTooltipPosition()} px-3 py-1.5 bg-emerald-950/90 border border-emerald-800 rounded-md text-xs font-medium text-emerald-400 whitespace-nowrap pointer-events-none shadow-xl z-50`}
          >
            Link Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};