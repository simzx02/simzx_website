// src/components/MatrixRain.tsx
import React, { useEffect, useRef } from 'react';

export const MatrixRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;

        // --- Configuration ---
        // A. Simple, clean alphabetical character set
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 
        const fontSize = 16;
        const columns = Math.floor(window.innerWidth / fontSize);
        const drops: number[] = [];

        // B. Pattern Control: Tracks which columns (even or odd) are actively moving
        let patternIndex = 0; 
        const dropSpeed = 1; // Standard speed increment

        // Initialize drop positions (Y-coordinate)
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // No need to recalculate columns here for simplicity, but good practice in complex apps
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // --- The Draw Loop ---
        const draw = () => {
            // 1. Fade effect: Clearer trails for a sharper look
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.font = fontSize + "px 'Courier New', monospace";
            
            // Increment pattern index every frame to control the pattern sequence
            patternIndex++;

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // 2. Controlled Dropping Pattern Logic
                
                // If the column index 'i' is EVEN and the pattern index is currently even (or vice versa)
                const isOddColumn = i % 2 !== 0;
                const isOddPattern = patternIndex % 2 !== 0;

                // Pattern: EVEN columns drop together, then ODD columns drop together
                if ((isOddColumn && isOddPattern) || (!isOddColumn && !isOddPattern)) {
                    // Head/Lead character color (optional - bright white or light green)
                    if (y < fontSize * 2) {
                        ctx.fillStyle = "#A2FAA5"; 
                    } else {
                        ctx.fillStyle = "#0F0"; // Standard green
                    }
                    
                    ctx.fillText(text, x, y);
                    
                    // Advance the drop position only for the active pattern group
                    drops[i] += dropSpeed;
                } else {
                    // Non-active columns remain stationary or advance very slowly (optional: uncomment for very slow creep)
                    // drops[i] += 0.05; 
                    
                    // Set color of non-active characters to a darker, trailing green
                    ctx.fillStyle = "#034005"; 
                    ctx.fillText(text, x, y);
                }

                // 3. Drop Reset Logic: Resets when a drop hits the bottom
                if (drops[i] * fontSize > canvas.height) {
                    // Reset to the top (y=0) immediately upon hitting the bottom
                    drops[i] = 0;
                }
            }
            
            // Overall Refresh Rate: Set to 50ms for a manageable speed
            setTimeout(() => {
                animationFrameId = requestAnimationFrame(draw);
            }, 10); 
        };

        draw();

        // Cleanup function for React 
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