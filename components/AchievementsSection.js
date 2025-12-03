// src/components/AchievementsSection.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 

const AchievementCard = ({ data }) => (
    // Make the card position relative to hold the absolute year badge
    <div className="group flex items-center p-6 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-x-2 relative">
        
        {/* 🚀 NEW: Year Badge (Top Right Corner - Adjusted) */}
        {data.year && (
            // Positioned inside the card, using top-4 right-4 padding area
            <span className="absolute top-4 right-4 
                           inline-block px-3 py-1 text-xs font-mono 
                           bg-indigo-50/70 dark:bg-slate-700/70 backdrop-blur-sm 
                           border border-indigo-100 dark:border-slate-600 
                           text-indigo-600 dark:text-indigo-300 rounded-full shadow-md">
                {data.year}
            </span>
        )}
        
        <div className={`w-16 h-16 rounded-xl bg-${data.color}-100 dark:bg-${data.color}-900/30 text-${data.color}-600 dark:text-${data.color}-400 flex items-center justify-center text-3xl mr-6 flex-shrink-0`}>
            {data.icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{data.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{data.description}</p>
        </div>
    </div>
);

// Constants for controlling visibility
const MAX_VISIBLE_ACHIEVEMENTS = 3; // show top 3 achievements by default

export const AchievementsSection = ({ data }) => {
    // State to track if the "See More" button has been clicked
    const [isExpanded, setIsExpanded] = useState(false);

    // Determine the number of achievements to show
    const achievementsToShow = isExpanded ? data : data.slice(0, MAX_VISIBLE_ACHIEVEMENTS);
    
    // Check if the total number exceeds the limit, thus needing the button
    const showToggleButton = data.length > MAX_VISIBLE_ACHIEVEMENTS;

    return (
        <section id="achievements" className="py-24 relative bg-white dark:bg-transparent">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Key <span className="text-indigo-600 dark:text-indigo-400">Achievements</span></h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {/* Render the conditionally sliced list */}
                    {achievementsToShow.map((item, index) => <AchievementCard key={index} data={item} />)}
                </div>

                {/* --- Toggle Button --- */}
                {showToggleButton && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all font-semibold"
                        >
                            {isExpanded ? (
                                <>
                                    Show Less ({data.length - MAX_VISIBLE_ACHIEVEMENTS} hidden)
                                    <ChevronUp className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    Show More ({data.length - MAX_VISIBLE_ACHIEVEMENTS} more)
                                    <ChevronDown className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};