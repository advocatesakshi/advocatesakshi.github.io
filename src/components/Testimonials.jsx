import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "I am extremely grateful to my advocate for the guidance, support, and dedication throughout my case. From the very beginning, you explained everything clearly and kept me confident at every step. What felt impossible at one point became reality only because of your experience and honest advice. Because of your guidance and efforts, I finally got my home  something that means everything to me and my family. You didn’t just handle the case professionally, you handled it with genuine care and responsibility. I truly believe that without your guidance, this outcome wouldn’t have been possible. I highly recommend you to anyone looking for an advocate who is knowledgeable, trustworthy, and truly committed to their client’s case. Once again, thank you for helping me get what was rightfully mine.",
    author: "Soheb Daudani",
    title: "Client"
  }
]

export default function Testimonials(){
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 2000) // Auto-slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-16 bg-[rgba(0,0,0,0.02)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-serif text-[var(--coffee)] mb-12">What Clients Say</h3>
        
        <div className="relative h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="card-soft p-8 mx-4">
                <blockquote className="text-lg text-[rgba(0,0,0,0.75)] mb-4">"{testimonials[current].quote}"</blockquote>
                <div className="mt-4 text-sm text-[rgba(0,0,0,0.6)]">— {testimonials[current].author}, {testimonials[current].title}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === current ? 'bg-[var(--coffee)] w-6' : 'bg-[rgba(0,0,0,0.2)]'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
