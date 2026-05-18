import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import GridBackground from '../components/AnimatedBackground'
import SocialSidebar from '../components/SocialSidebar'
import CustomCursor from '../components/CustomCursor'

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-white">
            <GridBackground />
            <CustomCursor />
            <Header />
            <SocialSidebar />
            <Hero />
            <Projects />
            <About />
            <Contact />
        </main>
    )
}
