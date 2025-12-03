// src/components/AcademicTimeline.js
import React from 'react';

const AcademicItem = ({ data }) => (
    <div className="relative flex items-start pl-12 md:pl-20 group">
        {/* Dot */}
        <div className="absolute left-2.5 md:left-[27px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-500 z-10 group-hover:scale-125 transition-transform"></div>
        
        <div className="w-full">
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-1 block">{data.period}</span>
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
                 {/* Vertical Line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900/50"></div>
                
                {data.map((item, index) => <AcademicItem key={index} data={item} />)}
            </div>
        </div>
    </section>
);