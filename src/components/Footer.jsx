import React from 'react'
import Logo from './Logo'

export default function Footer(){
  return (
    <footer id="contact" className="mt-12 bg-[var(--cream)] pt-8">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-[rgba(0,0,0,0.7)]">
        <div>
          <Logo />
          <div className="text-sm mt-2">Authentic Legal Guidance</div>
        </div>
        <div className="text-sm">
          <div className="text-lg font-semibold mb-2">Quick Links</div>
          <div className="flex flex-col gap-1">
            <a href="#practice" className="hover:underline">Services</a>
            <a href="https://www.instagram.com/courtroomdiary_/" className="hover:underline">Instagram</a>
            <a href="/disclaimer" className="hover:underline">Disclaimer</a>
          </div>
        </div>
        <div className="text-sm">
          <div className="text-lg font-semibold mb-2">Contact</div>
          <div>Address: Churchgate, Mumbai, Maharashtra, India</div>
          <div>Email: <a className="underline" href="mailto:lawthentic07@gmail.com">lawthentic07@gmail.com</a></div>
        </div>
      </div>

      <div className="border-t pt-4 text-center text-xs text-[rgba(0,0,0,0.55)]">© Lawthentic — All Rights Reserved</div>
    </footer>
  )
}
