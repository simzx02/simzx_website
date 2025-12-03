// app/page.tsx
'use client'; 
// MUST be marked as a Client Component for hooks (useState, useEffect) to work

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

// Imports from your components and config files
import { portfolioConfig, navItems } from '@/config'; 
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { AchievementsSection } from '@/components/AchievementsSection';
import { AcademicTimeline } from '@/components/AcademicTimeline';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { SkillsGrid } from '@/components/SkillsGrid';
import { UpdatesSection } from '@/components/UpdatesSection';
import { ContactSection } from '@/components/ContactSection';
import { MatrixRain } from '@/components/MatrixRain';

// --- Custom Hooks ---

// Reusable Typewriter Hook
const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (text !== currentWord) {
                    setText(currentWord.slice(0, text.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (text === '') {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                } else {
                    setText(text.slice(0, -1));
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
};


export default function Page() {
    // --- GLOBAL STATE ---
    const [darkMode, setDarkMode] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [partyMode, setPartyMode] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [showMatrix, setShowMatrix] = useState(false);
    const [visitorCount, setVisitorCount] = useState(124);

    const typewriterText = useTypewriter(portfolioConfig.personal.titles);

    // --- SIDE EFFECTS (Replacing Vanilla JS Listeners) ---
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            setShowScrollTop(window.scrollY > 500);

            // Active Section detection
            const sections = ['home', 'achievements', 'academic-journey', 'experience', 'projects', 'skills', 'updates', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    // Check if top of element is within the view (e.g., above 150px offset)
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
        
        // Matrix Rain Easter Egg (Press ` or ~)
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '`' || e.key === '~') {
                setShowMatrix(prev => !prev);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Visitor Counter Simulation Effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    // --- HANDLERS ---
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleProfileClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        if (newCount === 5) {
            setPartyMode(true);
            alert("🎉 PARTY MODE ACTIVATED! 🎉");
            setTimeout(() => { setPartyMode(false); setClickCount(0); }, 5000);
        }
    };


    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-950 text-slate-200' : 'bg-gray-50 text-slate-900'} ${partyMode ? 'animate-pulse' : ''}`}>
            
            {/* GLOBAL STYLES AND LOGIC */}
            {showMatrix && <MatrixRain />}

            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 transition-all" style={{ width: `${scrollProgress}%` }} />
            {/* Spotlight Effect - Controlled by mousePosition state */}
            {darkMode && (<div className="fixed inset-0 pointer-events-none z-0" style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)` }} />)}

            {/* 1. NAV (Component Call) */}
            <Nav 
                navItems={navItems}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                scrollProgress={scrollProgress}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                tagline={portfolioConfig.personal.tagline}
            />

            <main>
                {/* 2. HERO (Component Call) */}
                <Hero 
                    personal={portfolioConfig.personal} 
                    contact={portfolioConfig.contact} 
                    typewriterText={typewriterText}
                    scrollToSection={scrollToSection}
                    handleProfileClick={handleProfileClick}
                />

                {/* 3. ACHIEVEMENTS (Component Call) */}
                <AchievementsSection data={portfolioConfig.achievements} />

                {/* 4. ACADEMIC JOURNEY (Component Call) */}
                <AcademicTimeline data={portfolioConfig.education} />

                {/* 5. PROFESSIONAL JOURNEY (Component Call) */}
                <ExperienceTimeline data={portfolioConfig.experience} />

                {/* 6. PROJECTS (Component Call) */}
                <ProjectsGrid data={portfolioConfig.projects} />

                {/* 7. SKILLS (Component Call) */}
                <SkillsGrid data={portfolioConfig.skills} />

                {/* 8. UPDATES (Component Call) */}
                <UpdatesSection data={portfolioConfig.updates} />

                {/* 9. CONTACT (Component Call) */}
                <ContactSection contact={portfolioConfig.contact} visitorCount={visitorCount} />
            </main>

            {/* SCROLL TO TOP */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-500 transform transition-all z-50">
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}