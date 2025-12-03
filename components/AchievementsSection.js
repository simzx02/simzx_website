// src/components/AchievementsSection.js
import React from 'react';

const AchievementCard = ({ data }) => (
    <div className="group flex items-center p-6 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-x-2">
        <div className={`w-16 h-16 rounded-xl bg-${data.color}-100 dark:bg-${data.color}-900/30 text-${data.color}-600 dark:text-${data.color}-400 flex items-center justify-center text-3xl mr-6 flex-shrink-0`}>
            {data.icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{data.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{data.description}</p>
        </div>
    </div>
);

export const AchievementsSection = ({ data }) => (
    <section id="achievements" className="py-24 relative bg-white dark:bg-transparent">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Key <span className="text-indigo-600 dark:text-indigo-400">Achievements</span></h2>
                <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
                {data.map((item, index) => <AchievementCard key={index} data={item} />)}
            </div>
        </div>
    </section>
);