import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="relative w-full bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left: Copy */}
          <div className="order-2 md:order-1">
            <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[var(--coffee)] leading-tight"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}>
              Trusted Legal Solutions for Individuals &amp; Businesses
            </motion.h1>

            <motion.p className="mt-6 text-[rgba(75,46,46,0.85)] max-w-xl text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.15, duration: 0.6 }}>
              Clarity, ethics and pragmatic counsel — a measured, modern approach to complex legal challenges across India.
            </motion.p>

            <motion.div className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.25 }}>
              <a href="https://wa.me/918369165375" className="px-5 py-3 rounded-md bg-[var(--gold)] text-[var(--coffee)] font-medium shadow-sm">Schedule Consultation</a>
              <a href="#services" className="px-5 py-3 rounded-md border border-[var(--coffee)] text-[var(--coffee)]">Explore Services</a>
            </motion.div>
          </div>

          {/* Right: Visual (statue + blob) */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              {/* Soft rounded blob background */}
              <div className="absolute -right-10 -top-10 w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-[40%] bg-[var(--gold)]/8" />

              <motion.img src="/assets/lady-of-justice-left.png" alt="Lady of Justice"
                className="relative rounded-2xl  w-full"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
