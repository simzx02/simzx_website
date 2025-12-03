// src/components/SkillsGrid.js
import React from 'react';

const SkillItem = ({ skill }) => (
    <div className="px-6 py-4 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-white/5 flex flex-col items-center hover:scale-110 transition-transform duration-300 shadow-sm">
        <span className="text-2xl mb-2">{skill.icon}</span>
        <span className="font-bold text-slate-800 dark:text-white">{skill.name}</span>
    </div>
);

export const SkillsGrid = ({ data }) => (
    <section id="skills" className="py-24 relative bg-white dark:bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-indigo-600 dark:text-indigo-400">Arsenal</span></h2>
                <p className="text-slate-600 dark:text-slate-400">Tools and technologies I work with</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {data.map((skill, index) => <SkillItem key={index} skill={skill} />)}
            </div>
        </div>
    </section>
);