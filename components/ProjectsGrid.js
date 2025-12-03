// src/components/ProjectsGrid.js
import React from 'react';
import { Github, Eye, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project }) => (
    <div className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2">
        
        {/* 🚀 IMAGE CONTAINER - NO ICONS */}
        <div className="h-48 relative overflow-hidden">
            {project.image ? (
                // Use the provided image
                <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    // object-cover ensures the image fills the 12rem (h-48) height without stretching
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                />
            ) : (
                // Fallback to the original gradient background
                <div className="h-full bg-gradient-to-br from-indigo-100 to-white dark:from-slate-800 dark:to-slate-900 relative">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                </div>
            )}
            
            {/* NOTE: Project Icon Overlay DIV has been REMOVED */}
        </div>
        
        <div className="p-6 relative z-10">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
            
            {/* ... Tags and Links ... */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-slate-300 border border-indigo-100 dark:border-slate-700">{tag}</span>
                ))}
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <Github className="w-4 h-4" /> Code
                    </a>
                )}
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <Eye className="w-4 h-4" /> Demo
                    </a>
                )}
            </div>
        </div>
    </div>
);

export const ProjectsGrid = ({ data }) => (
    <section id="projects" className="py-24 relative bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 dark:border-white/10 pb-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span></h2>
                    <p className="text-slate-600 dark:text-slate-400">Innovation through code and hardware</p>
                </div>
                <a href="https://github.com/simzx02" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-slate-900 dark:hover:text-white transition-colors mt-4 md:mt-0">
                    View all on GitHub <ChevronRight className="w-4 h-4" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((project, index) => <ProjectCard key={index} project={project} />)}
            </div>
        </div>
    </section>
);