"use client"
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                }}
            >
                <div className="relative">
                    <div className="absolute bg-[#7BED9D] rounded-full w-3 h-3 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bg-[#B17BED] rounded-full w-5 h-5 -translate-x-1/2 -translate-y-1/2 opacity-30 animate-ping" />
                </div>
            </div>
            <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
