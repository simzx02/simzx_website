// src/components/UpdatesSection.js
import React from 'react';

const UpdateItem = ({ update }) => (
    <div className={`p-6 rounded-2xl bg-white dark:bg-slate-800 border-l-4 border-${update.color}-500 shadow-sm`}>
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-mono">{update.date}</div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{update.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm">{update.description}</p>
    </div>
);

export const UpdatesSection = ({ data }) => (
    <section id="updates" className="py-24 relative bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Latest <span className="text-indigo-600 dark:text-indigo-400">Updates</span></h2>
                <div className="h-px flex-grow bg-gray-300 dark:bg-white/10"></div>
                <span className="text-xs font-mono text-indigo-500 animate-pulse">LIVE FEED</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {data.map((update, index) => <UpdateItem key={index} update={update} />)}
            </div>
        </div>
    </section>
);