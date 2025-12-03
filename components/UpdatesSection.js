// src/components/UpdatesSection.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'; 
// Note: Star is no longer imported as it's replaced by a text badge

// Constants for controlling visibility
const MAX_VISIBLE_UPDATES = 3;

// UpdateItem is now a simple text block, separated by a line
const UpdateItem = ({ update, isLast, index }) => ( 
    <div className="space-y-2 pb-6"> 
        <div className="flex items-center gap-4">
            
            {/* 🌟 NEW: Top 2 Highlight Text Badge (Conditional) */}
            {index < 2 && (
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-bold 
                                 bg-red-500 text-white rounded-full shadow-md animate-pulse flex-shrink-0">
                    NEW !
                </span>
            )}

            {/* Date */}
            <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 font-mono flex-shrink-0">
                {update.date}
            </div>
            
            {/* Title & External Link */}
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                <span className={`${update.link ? 'hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer' : ''}`}>
                    {update.title}
                </span>

                {/* 🔗 External Link Icon (Conditional) */}
                {update.link && (
                    <a href={update.link} target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center ml-3 text-slate-500 hover:text-indigo-500 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
            </h3>
        </div>
        
        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm pl-2">
            {update.description}
        </p>

        {/* Horizontal Divider */}
        {!isLast && (
             <div className="pt-4">
                 <hr className="border-t border-gray-200 dark:border-white/10" />
             </div>
        )}
    </div>
);

export const UpdatesSection = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const updatesToShow = isExpanded ? data : data.slice(0, MAX_VISIBLE_UPDATES);
    const showToggleButton = data.length > MAX_VISIBLE_UPDATES;

    return (
        <section id="updates" className="py-24 relative bg-gray-50 dark:bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Latest <span className="text-indigo-600 dark:text-indigo-400">Updates</span></h2>
                    <div className="h-px flex-grow bg-gray-300 dark:bg-white/10"></div>
                    <span className="text-xs font-mono text-indigo-500 animate-pulse">LIVE FEED</span>
                </div>

                <div className="md:grid-cols-1 space-y-4">
                    {updatesToShow.map((update, index) => (
                        <UpdateItem 
                            key={index} 
                            update={update} 
                            isLast={index === updatesToShow.length - 1} 
                            index={index}
                        />
                    ))}
                </div>

                {/* --- Toggle Button --- */}
                {showToggleButton && (
                    <div className="text-center pt-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all font-semibold"
                        >
                            {isExpanded ? (
                                <>
                                    Show Less ({data.length - MAX_VISIBLE_UPDATES} hidden)
                                    <ChevronUp className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    Show More ({data.length - MAX_VISIBLE_UPDATES} more)
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