import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Practice from './components/Practice'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'

export default function App(){
  return (
    <div className="min-h-screen text-gray-800">
      <Nav />
      <main className="w-full">
        <Hero />
        <Practice />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  )
}
