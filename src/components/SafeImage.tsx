import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageOff, Loader2 } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const SafeImage = ({ src, alt, className, priority = false, ...props }: SafeImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [retryWithFallback, setRetryWithFallback] = useState(false);

  // Mapping local paths to remote fallbacks for preview stability
  const remoteFallbacks: Record<string, string> = {
    '/assets/images/products/f-cut-v3-basic.webp': 'https://images.unsplash.com/photo-1565511394011-8240409da659?auto=format&fit=crop&q=80&w=1200',
    '/assets/images/products/f-cut-pro-12kw.webp': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    '/assets/images/products/f-weld-nano-1500.webp': 'https://images.unsplash.com/photo-1531280758014-11440590867f?auto=format&fit=crop&q=80&w=1200',
    '/assets/images/products/f-mark-uv-5.webp': 'https://images.unsplash.com/photo-1617782635487-6e492d37651a?auto=format&fit=crop&q=80&w=1200',
    '/assets/images/products/f-sol-robot-cell.webp': 'https://images.unsplash.com/photo-1590986440410-ad303d9f31f7?auto=format&fit=crop&q=80&w=1200',
    '/assets/images/products/f-cut-pipe-200.webp': 'https://images.unsplash.com/photo-1590483734724-383b85ad05bd?auto=format&fit=crop&q=80&w=1200',
    '/assets/images/products/f-weld-robot-arm.webp': 'https://images.unsplash.com/photo-1590986440410-ad303d9f31f7?auto=format&fit=crop&q=80&w=1200',
    '/assets/images/products/f-mark-mopa-100.webp': 'https://images.unsplash.com/photo-1617782635487-6e492d37651a?auto=format&fit=crop&q=80&w=1200',
  };

  const currentSrc = retryWithFallback && remoteFallbacks[src] ? remoteFallbacks[src] : src;

  // Reset state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    setRetryWithFallback(false);
  }, [src]);

  const handleImageError = () => {
    if (!retryWithFallback && remoteFallbacks[src]) {
      setRetryWithFallback(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      <AnimatePresence>
        {!isLoaded && !error && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-10 bg-slate-50"
          >
            <Loader2 className="w-6 h-6 text-brand-cyan animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4">
          <ImageOff className="w-8 h-8 mb-2" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-center">Image Not Available</span>
        </div>
      ) : (
        <motion.img
          initial={priority ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          src={currentSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      )}
    </div>
  );
};
