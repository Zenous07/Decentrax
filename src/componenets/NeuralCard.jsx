import React from 'react';
import { motion } from 'framer-motion';
import DecryptedText from './decryptText.jsx';
import { updateSearchCount } from '../appwrite';

const NeuralCard = ({ id, title, content, className, index, isSkeleton }) => {
  const handleClick = async () => {
    if (isSkeleton) return;
    await updateSearchCount(id);
  };

  return (
    <motion.div
      initial={isSkeleton ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={isSkeleton ? { opacity: 1, y: 0 } : {}}
      whileInView={isSkeleton ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative group min-w-[320px] max-w-[400px] shrink-0 cursor-pointer ${className || ''}`}
      onClick={handleClick}
    >
      {/* Industrial Frame */}
      <div className={`absolute -inset-px rounded-lg -z-10 blur-[1px] group-hover:blur-[2px] transition-all duration-500 ${isSkeleton ? 'bg-violet-accent/20' : 'bg-linear-to-br from-violet-accent/50 via-transparent to-surface/20'}`} />
      
      <div className={`relative min-h-[380px] flex flex-col bg-surface/90 backdrop-blur-xl border rounded-lg p-6 overflow-hidden transition-all duration-500 ${isSkeleton ? 'border-violet-accent/30' : 'border-white/10 group-hover:border-violet-accent/50 group-hover:shadow-[0_0_30px_rgba(157,78,221,0.15)]'}`}>
        
        {/* Node Metadata (Monospace) */}
        <div className="flex justify-between items-start mb-6 font-robert-medium text-[10px] tracking-[0.2em] text-violet-accent/60 uppercase">
          <span className="flex items-center gap-2">
            <span className={`size-1.5 rounded-full ${isSkeleton ? 'bg-violet-accent/60 animate-pulse' : 'bg-violet-accent animate-pulse'}`} />
            {isSkeleton ? <div className="h-2 w-24 bg-white/20 rounded animate-pulse" /> : 'NODE_DATA'}
          </span>
          {isSkeleton ? <span className="animate-pulse">SYNCING...</span> : <span>IDX_0x0{index + 1}</span>}
        </div>

        {/* Title Area */}
        <div className="mb-4">
          {isSkeleton ? (
            <div className="h-8 w-full bg-violet-accent/10 rounded animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
            </div>
          ) : (
            <DecryptedText
              text={title}
              speed={40}
              maxIterations={15}
              revealDirection="center"
              className="text-2xl font-zentry text-white group-hover:text-violet-accent transition-colors duration-300 uppercase tracking-wider"
              parentClassName="block"
              animateOn="hover"
            />
          )}
        </div>

        {/* Content Area */}
        <div className="space-y-3 mb-6">
          {isSkeleton ? (
            <>
              <div className="h-3 w-full bg-white/10 rounded animate-pulse" />
              <div className="h-3 w-11/12 bg-white/10 rounded animate-pulse" />
              <div className="h-3 w-4/5 bg-white/10 rounded animate-pulse" />
            </>
          ) : (
            <p className="text-sm font-robert-regular text-white/50 leading-relaxed line-clamp-3 group-hover:text-white/70 transition-colors duration-300">
              {content}
            </p>
          )}
        </div>

        {/* Technical Footer */}
        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-robert-medium tracking-widest text-white/30 uppercase">
          <div className="flex gap-4">
            {isSkeleton ? (
              <>
                <div className="h-2 w-16 bg-white/10 rounded animate-pulse" />
                <div className="h-2 w-12 bg-white/10 rounded animate-pulse" />
              </>
            ) : (
              <>
                <span className="group-hover:text-violet-accent transition-colors">ACCESS_GRANTED</span>
                <span>ENCR_OKLCH</span>
              </>
            )}
          </div>
          <div className={`size-2 transition-all duration-300 ${isSkeleton ? 'bg-violet-accent/20 animate-pulse' : 'bg-white/10 group-hover:bg-violet-accent'}`} />
        </div>

        {/* Animated Scanning Line (Hover) */}
        {!isSkeleton && <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-violet-accent to-transparent -translate-y-full group-hover:animate-scanline pointer-events-none opacity-50" />}
      </div>
    </motion.div>
  );
};

export default NeuralCard;
