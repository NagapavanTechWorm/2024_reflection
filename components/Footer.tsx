import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/n.a.g.a.p.a.v.a.n/' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/nagapavan-a-techie/' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/nagapavan_a' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/NagapavanTechWorm/' },
]

export function Footer() {
  return (
    <footer >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Nagapavan A. All rights reserved.
          </p>
          <nav className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white  transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}