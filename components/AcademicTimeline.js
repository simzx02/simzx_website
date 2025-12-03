// src/components/AcademicTimeline.js
import React from 'react';

const AcademicItem = ({ data }) => (
    // Reduced padding on the parent container (from pl-12 md:pl-20)
    <div className="relative flex items-start pl-8 md:pl-10 group"> 
        
        {/* Dot - Position remains left-4 (16px from parent edge) */}
        <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 z-10 
                      -translate-x-1/2 group-hover:scale-150 group-hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]"> 
        </div>
        
        {/* Text Content - Reduced padding (from pl-8 md:pl-16) to pull text closer */}
        <div className="w-full pl-6 md:pl-8"> 
            
            {/* 🚀 FIXED: Applied the Experience Timeline's badge styling to the period */}
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-300 text-xs font-mono mb-2 block">
                {data.period}
            </span>
            
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{data.degree}</h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium">{data.institution}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                {data.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
        </div>
    </div>
);

export const AcademicTimeline = ({ data }) => (
    <section id="academic-journey" className="py-24 relative bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic <span className="text-indigo-600 dark:text-indigo-400">Journey</span></h2>
                <p className="text-slate-600 dark:text-slate-400">My educational background and milestones</p>
            </div>
            <div className="relative space-y-12">
                {/* Vertical Line - OPACITY CHANGED from opacity-80 to opacity-30 */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 
                              bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-200 dark:to-slate-800 opacity-30">
                </div>
                
                {data.map((item, index) => <AcademicItem key={index} data={item} />)}
            </div>
        </div>
    </section>
);