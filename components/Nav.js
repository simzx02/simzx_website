// src/components/Nav.js
import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NavItem = ({ id, label, isActive, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={`text-sm font-medium transition-colors ${
            isActive ? 'text-indigo-500 dark:text-indigo-400' : 'hover:text-indigo-500 dark:hover:text-indigo-400'
        }`}>
        {label}
    </button>
);

export const Nav = ({ navItems, activeSection, scrollToSection, darkMode, setDarkMode, scrollProgress, mobileMenuOpen, setMobileMenuOpen, tagline }) => (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrollProgress > 5 ? 'bg-white/80 dark:bg-slate-950/70 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-2' : 'py-4 border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => scrollToSection('home')}>
                {tagline}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
                {navItems.map(item => (
                    <NavItem
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        isActive={activeSection === item.id}
                        onClick={scrollToSection}
                    />
                ))}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 hover:scale-110 transition-transform">
                    {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 py-4 shadow-2xl">
                {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-center py-3 text-lg font-medium hover:text-indigo-500">
                        {item.label}
                    </button>
                ))}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full mt-4 px-4 py-2 rounded-full bg-gray-200 dark:bg-slate-800 font-medium">
                    Toggle Theme
                </button>
            </div>
        )}
    </nav>
);