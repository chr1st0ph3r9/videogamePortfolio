"use client"
import { FaGithub, FaLinkedin, FaEnvelope, FaItchIo } from 'react-icons/fa'

const links = [
    { icon: <FaGithub />,   href: 'https://github.com/chr1st0ph3r9',                label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/christopher19/',     label: 'LinkedIn' },
    { icon: <FaItchIo />,   href: 'https://christopher-hayling.itch.io/',           label: 'itch.io' },
    { icon: <FaEnvelope />, href: 'mailto:christopherhayling9@gmail.com',           label: 'Email' },
]

const SocialSidebar: React.FC = () => {
    return (
        <div className="fixed right-5 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3">
            {links.map(link => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-white/30 hover:text-coral transition-colors duration-200 text-base p-1"
                >
                    {link.icon}
                </a>
            ))}
            <div className="w-px h-14 bg-gradient-to-b from-white/15 to-transparent mt-1" />
        </div>
    )
}

export default SocialSidebar

