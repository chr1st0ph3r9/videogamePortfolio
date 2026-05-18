"use client"

const GridBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            {/* Grid lines */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: '64px 64px',
                }}
            />
            {/* Radial vignette to fade grid at edges */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.7) 100%)',
                }}
            />
            {/* Subtle coral glow at bottom-left */}
            <div
                className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(255,107,91,0.06) 0%, transparent 70%)',
                }}
            />
        </div>
    )
}

export default GridBackground
