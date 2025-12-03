// src/components/ExperienceTimeline.js
import React from 'react';
// Removed Briefcase import since we use 📍 emoji now
//import { Briefcase } from 'lucide-react';

const TimelineItem = ({ data, index }) => {
    const isRight = index % 2 !== 0; 

    return (
        <div className="relative flex flex-col md:flex-row gap-8 items-start group">

            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 
                            -translate-x-1/2 mt-1.5 z-10 group-hover:scale-150 group-hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

            {/* Date Block */}
            <div className={`pl-12 md:pl-0 md:w-1/2 
                             ${isRight ? 'md:text-right md:pr-12 md:order-1' : 'md:text-left md:pl-12 md:order-2'}`}>
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-300 text-xs font-mono mb-2 md:mb-0">
                    {data.period}
                </span>
            </div>

            {/* Content Card */}
            <div className={`pl-12 md:pl-0 md:w-1/2 
                             ${isRight ? 'md:pl-12 md:order-2' : 'md:pr-12 md:order-1'}`}>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-1 relative overflow-hidden">
                    <h3 className="text-xl font-bold mb-1">{data.role}</h3>

                    {/* 📍 Emoji as icon */}
                    <div className="text-purple-600 dark:text-purple-300 font-bold mb-3 flex items-center gap-2 text-sm">
                        <span className="text-red-500 dark:text-red-400 text-lg">📍</span>
                        {data.company}
                    </div>

                    <p className="text-sm leading-relaxed">{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export const ExperienceTimeline = ({ data }) => (
    <section id="experience" className="py-24 relative bg-white dark:bg-transparent">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Professional <span className="text-indigo-600 dark:text-indigo-400">Journey</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400">My path in engineering and innovation</p>
            </div>

            <div className="relative space-y-12">

                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 
                                bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-200 dark:to-slate-800 opacity-30"></div>

                {data.map((item, index) => (
                    <TimelineItem key={index} data={item} index={index} />
                ))}
            </div>
        </div>
    </section>
);
