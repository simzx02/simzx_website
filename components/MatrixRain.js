// src/components/MatrixRain.js
import React, { useEffect, useRef } from 'react';

export const MatrixRain = () => {
    // Note: If you're using TypeScript (.tsx), you should use: useRef<HTMLCanvasElement>(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Added null check for robustness

        const ctx = canvas.getContext('2d');
        if (!ctx) return; // Added null check for robustness
        
        let animationFrameId;

        // ======================================================
        // 🚀 ADJUSTABLE PARAMETERS FOR PERSONALIZATION
        // ======================================================
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234556789!@#$%^&*()"; // Character Set
        const fontSize = 16;                                           // Font Size (px)
        const trailOpacity = 0.05;                                     // Trail Length (Lower = longer trail, Higher = sharper)
        const dropSpeed = 1;                                           // Base Drop Speed (pixels per frame)
        const resetProbability = 0.975;                                // Density (Higher = less frequent drops starting)
        const textColor = "#0F0";                                      // Text Color (Standard Green)
        // ======================================================

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Note: columns and drops array are not re-initialized here, which is standard for this simple pattern.
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const columns = Math.floor(canvas.width / fontSize);
        const drops = [];
        for (let x = 0; x < columns; x++) drops[x] = 1;

        const draw = () => {
            // Darkens the background slightly every frame, creating the trail effect
            ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = textColor; // Use adjustable color
            ctx.font = fontSize + "px 'Courier New', monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                // Sending the drop back to the top randomly
                if (drops[i] * fontSize > canvas.height && Math.random() > resetProbability) {
                    drops[i] = 0;
                }
                // Advance drop position using adjustable speed
                drops[i] += dropSpeed;
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        // Cleanup function for React (stops the animation and removes event listener)
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed top-0 left-0 w-full h-full z-[9999] opacity-80 pointer-events-none" 
        />
    );
};