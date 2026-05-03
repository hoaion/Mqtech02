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
  const fallbackUrl = `https://placehold.co/800x450/003366/FFFFFF?text=Laser+Machine+Coming+Soon`;

  // Reset state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

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
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      )}
    </div>
  );
};
