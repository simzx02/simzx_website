// src/components/ContactSection.js
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactCard = ({ href, title, detail, Icon }) => (
    <a href={href} className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all group shadow-sm">
        <div className="w-12 h-12 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
            <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h3 className="text-slate-900 dark:text-white font-semibold">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{detail}</p>
    </a>
);

export const ContactSection = ({ contact, visitorCount }) => (
    <section id="contact" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Let's Build Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400">Amazing</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                I'm currently looking for new opportunities in robotics and software engineering. 
                Whether you have a question or just want to say hi, my inbox is open!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <ContactCard href={`mailto:${contact.email}`} title="Email Me" detail={contact.email} Icon={Mail} />
                <ContactCard href={contact.linkedin} title="Connect" detail="LinkedIn Profile" Icon={Linkedin} />
                <ContactCard href={`tel:${contact.phone}`} title="Call Me" detail={contact.phone} Icon={Phone} />
            </div>

            <div className="flex flex-col items-center justify-center gap-2 mt-12 border-t border-gray-200 dark:border-white/10 pt-8">
                <p className="text-slate-500 dark:text-slate-500 text-sm">
                    &copy; 2025 {contact.name || 'Zhong Xian Sim'}. Built with Passion.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>Live Visitors: {visitorCount}</span>
                </div>
            </div>
        </div>
    </section>
);