import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import AnimatedBackground from '../components/AnimatedBackground'
import CustomCursor from '../components/CustomCursor'

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <CustomCursor />
            <div className="absolute inset-0 z-10">
                <div className="container mx-auto px-4">
                    <Hero />
                    <Projects />
                    <About />
                    <Contact />
                </div>
            </div>
        </main>
    );
}
