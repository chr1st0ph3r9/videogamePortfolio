"use client"
import React, { useState, useEffect } from 'react'

const CustomCursor: React.FC = () => {
    const [pos, setPos] = useState({ x: -100, y: -100 })
    const [isPointer, setIsPointer] = useState(false)

    useEffect(() => {
        const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
        const onOver = (e: MouseEvent) => {
            const el = e.target as HTMLElement
            setIsPointer(window.getComputedStyle(el).cursor === 'pointer')
        }
        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseover', onOver)
        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseover', onOver)
        }
    }, [])

    return (
        <>
            {/* Dot */}
            <div
                className="fixed pointer-events-none z-50"
                style={{
                    left: pos.x,
                    top: pos.y,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.6 : 1})`,
                    transition: 'transform 0.15s ease',
                }}
            >
                <div className="w-3 h-3 rounded-full bg-coral" />
            </div>
            {/* Ring */}
            <div
                className="fixed pointer-events-none z-50"
                style={{
                    left: pos.x,
                    top: pos.y,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.6 : 1})`,
                    transition: 'left 0.08s ease, top 0.08s ease, transform 0.2s ease',
                }}
            >
                <div
                    className="w-8 h-8 rounded-full border border-coral/40"
                    style={{ transition: 'transform 0.2s ease' }}
                />
            </div>
            <style jsx global>{`body { cursor: none; }`}</style>
        </>
    )
}

export default CustomCursor
