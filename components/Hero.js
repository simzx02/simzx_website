// src/components/Hero.js
import React from 'react';
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react';

export const Hero = ({ personal, contact, typewriterText, scrollToSection, handleProfileClick }) => (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text Content */}
            <div className="order-2 md:order-1">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
                    Welcome to my portfolio
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                    Hi, I'm <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-gradient">
                        {personal.name}
                    </span>
                </h1>
                <div className="h-8 mb-6">
                    <span className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-mono">
                        {typewriterText}
                        <span className="animate-blink border-r-2 border-indigo-500 pr-1"></span>
                    </span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
                    {personal.description}
                </p>

                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
                        View Work
                        <ChevronRight className="w-4 h-4"/>
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-600 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-slate-700 dark:text-slate-300 font-semibold transition-all hover:bg-indigo-500/10">
                        Contact Me
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 mt-10">
                    <a href={contact.github} target="_blank" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:-translate-y-1">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href={contact.linkedin} target="_blank" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:-translate-y-1">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={`mailto:${contact.email}`} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:-translate-y-1">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Profile Image (Easter Egg Trigger) */}
            <div className="order-1 md:order-2 flex justify-center relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer" onClick={handleProfileClick}>
                    {/* Rotating rings (Custom CSS classes needed) */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30 animate-spin-slow"></div>
                    <div className="absolute -inset-4 rounded-full border border-gray-300 dark:border-white/10 animate-spin-reverse-slower"></div>
                    
                    {/* Image Container */}
                    <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-indigo-500/20 z-10">
                        <img src={personal.image} 
                                alt={personal.name} 
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
);