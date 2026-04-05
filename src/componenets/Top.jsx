import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { data as fallbackData } from '../data';
import NeuralCard from './NeuralCard';
import AnimatedTitle from './AnimatedTitle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getTrendingAlgo } from '../appwrite';

gsap.registerPlugin(ScrollTrigger);

const Top = () => {
    const [algorithms, setAlgorithms] = useState([]);
    const [loading, setLoading] = useState(true);
    const pulseRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchTrending = async () => {
            setLoading(true);
            try {
                // Try fetching from Appwrite
                const trendData = await getTrendingAlgo();

                if (trendData && trendData.length > 0) {
                    const enrichedData = trendData.map(item => {
                        const baseInfo = fallbackData.find(f => f.id === item.id) || {};
                        return { ...item, ...baseInfo };
                    });
                    setAlgorithms(enrichedData);
                    setLoading(false); // Only stop loading on SUCCESS
                } 
                // If no data yet, we keep loading skeletons per user request
            } catch (error) {
                console.warn("DB Connection Terminated: Stuck in Neural Skeleton Mode until database is restored.", error);
                // We no longer fallback to static data here to honor the 'stay on skeleton' request
            }
            // Finally removed to prevent skeleton disappearance on error
        };

        fetchTrending();
    }, []);

    // Neural Pulse Animation
    useEffect(() => {
        if (!loading && algorithms.length > 0 && pulseRef.current) {
            const ctx = gsap.context(() => {
                gsap.to(pulseRef.current, {
                    x: '100vw',
                    duration: 4,
                    repeat: -1,
                    ease: 'none',
                    delay: 1
                });
            });
            return () => ctx.revert();
        }
    }, [loading, algorithms]);

    return (
        <section
            id="top-algorithms"
            ref={containerRef}
            className="relative min-h-screen w-screen bg-dark overflow-hidden flex flex-col justify-center py-20"
        >
            {/* Background Layers */}
            <div className="absolute inset-0 neural-grid opacity-30" />
            <div className="absolute inset-0 scanline-overlay opacity-20" />

            {/* Neural Pulse Beam */}
            <div
                ref={pulseRef}
                className="absolute top-0 left-0 h-full w-20 pulse-beam z-10 -translate-x-full pointer-events-none"
            />

            <div className="container mx-auto px-5 md:px-10 z-20">
                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Brutalist Sidebar Info */}
                    <div className="hidden lg:flex flex-col gap-4 border-l border-white/10 pl-6 h-full font-robert-medium text-[10px] tracking-[0.3em] text-white/40 uppercase">
                        <div className="flex flex-col gap-1">
                            <span className="text-violet-accent">System_Status</span>
                            <span className="text-white/80">Online_Scanning</span>
                        </div>
                        <div className="flex flex-col gap-1 mt-10">
                            <span>Sector_7G</span>
                            <span>Enc_Protocol_v4.2</span>
                        </div>
                        <div className="mt-auto py-10">
                            <div className="size-2 bg-violet-accent animate-ping" />
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <AnimatedTitle
                                title="Top<br />Algorithms"
                                containerClass="!text-left !px-0"
                            />

                            <div className="hidden md:block text-right font-robert-medium text-xs tracking-widest text-white/30 uppercase">
                                <p>Refreshed_Realtime</p>
                                <p className="text-violet-accent">Data_Source: {loading ? 'SCANNING...' : 'CLOUD_CLUSTER'}</p>
                            </div>
                        </div>

                        {/* Card Stream - Added no-scrollbar */}
                        <div className="flex overflow-x-auto pb-10 gap-8 no-scrollbar snap-x snap-mandatory">
                            {loading ? (
                                // Render 5 Skeletons
                                Array(5).fill(0).map((_, i) => (
                                    <div key={`skeleton-${i}`} className="snap-center">
                                        <NeuralCard isSkeleton={true} index={i} />
                                    </div>
                                ))
                            ) : (
                                algorithms?.map((algo, index) => (
                                    algo && (
                                        <div key={algo.$id || algo.id || `algo-${index}`} className="snap-center">
                                            <NeuralCard
                                                id={algo.$id || algo.id}
                                                title={algo.title}
                                                content={algo.content}
                                                index={index}
                                            />
                                        </div>
                                    )
                                ))
                            )}
                        </div>

                        {/* Stream Bottom Indicator */}
                        <div className="mt-4 h-px w-full bg-white/5 relative">
                            {!loading && (
                                <motion.div
                                    animate={{
                                        width: ['0%', '100%'],
                                        left: ['0%', '0%']
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'none',
                                        delay: 1
                                    }}
                                    className="absolute top-0 h-full bg-linear-to-r from-transparent via-violet-accent to-transparent shadow-[0_0_10px_rgba(157,78,221,0.5)]"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-10 right-10 size-40 bg-violet-accent/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-10 left-10 size-64 bg-primary/5 rounded-full blur-[120px]" />
        </section>
    );
};

export default Top;