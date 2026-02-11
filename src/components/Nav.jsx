import React, { useEffect, useState } from 'react'
import Logo from './Logo'

const links = [
  {id:'home', label:'Home'},  
  {id:'services', label:'Services'},
  {id:'about', label:'About'},
  {id:'contact', label:'Contact'}
]

export default function Nav(){
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-30 transition-colors duration-500 ${scrolled ? 'bg-cream/70 text-coffee shadow-sm backdrop-blur-md' : 'bg-transparent text-coffee'}`}>
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <ul className={`hidden md:flex gap-6 items-center text-sm ${scrolled ? 'text-coffee' : 'text-coffee'}`}>
          {links.map(l=> (
            <li key={l.id}><a href={`#${l.id}`} className="hover:underline focus:outline-none">{l.label}</a></li>
          ))}
        </ul>
        <div className="md:hidden">
          <a href="#contact" className={`text-sm px-3 py-2 rounded ${scrolled ? 'bg-[var(--gold)] text-coffee' : 'bg-coffee text-cream'}`}>Consultation</a>
        </div>
      </nav>
    </header>
  )
}
