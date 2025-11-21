import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Database, Brain, Target, Zap } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Data Ingestion",
        desc: "Seamlessly connect your ERP, WMS, and fleet data sources via our secure, high-throughput API connectors.",
        icon: Database,
        color: "from-blue-500 to-cyan-500"
    },
    {
        number: "02",
        title: "AI Simulation",
        desc: "Our proprietary engine runs millions of scenario simulations in parallel to identify optimal operational paths.",
        icon: Brain,
        color: "from-purple-500 to-pink-500"
    },
    {
        number: "03",
        title: "Strategic Optimization",
        desc: "Receive actionable, ranked recommendations designed to maximize efficiency and minimize costs.",
        icon: Target,
        color: "from-orange-500 to-red-500"
    },
    {
        number: "04",
        title: "Automated Execution",
        desc: "Implement decisions instantly with automated dispatching and real-time fleet communication.",
        icon: Zap,
        color: "from-green-500 to-emerald-500"
    }
];

const Process = () => {
    const containerRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", latest => {
            const stepIndex = Math.min(
                Math.floor(latest * steps.length * 1.1),
                steps.length - 1
            );
            setActiveStep(Math.max(0, stepIndex));
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section
            ref={containerRef}
            className="relative py-20 bg-black overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        From Data to Decision
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Our AI-powered platform transforms your logistics operations in four seamless steps
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Progress Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    </div>

                    {/* Step Cards */}
                    <div className="space-y-20">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = activeStep >= index;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                        ease: "easeOut"
                                    }}
                                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? '' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content Side */}
                                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                                        <div className={`inline-flex items-center justify-center mb-4 ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'
                                            }`}>
                                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-10 border border-white/10`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Center Number Circle */}
                                    <div className="relative flex-shrink-0">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.2,
                                                ease: "easeOut"
                                            }}
                                            className="relative"
                                        >
                                            {/* Outer Glow */}
                                            <motion.div
                                                animate={{
                                                    scale: isActive ? [1, 1.15, 1] : 1,
                                                    opacity: isActive ? [0.3, 0.5, 0.3] : 0.2,
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-xl`}
                                            />

                                            {/* Main Circle */}
                                            <div className="relative w-20 h-20 flex items-center justify-center">
                                                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-10`} />
                                                <div className="absolute inset-0 rounded-full bg-black/80 backdrop-blur-sm border border-white/10" />
                                                <span className={`relative text-2xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                                                    {step.number}
                                                </span>
                                            </div>
                                        </motion.div>

                                        {/* Connecting Line Indicator */}
                                        {index < steps.length - 1 && (
                                            <motion.div
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                                className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-white/20 to-transparent origin-top"
                                            />
                                        )}
                                    </div>

                                    {/* Spacer for alignment */}
                                    <div className="flex-1 hidden lg:block" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
