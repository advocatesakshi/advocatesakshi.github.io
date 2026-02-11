import React from 'react'

export default function About(){
  return (
    <section id="about" className="bg-[var(--cream)]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-sm">
            <img src="/assets/lady-of-justice-right.png" alt="Advocate" className="drop-shadow-xl w-full" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--coffee)]">About Lawthentic</h2>
          <p className="mt-4 text-[rgba(75,46,46,0.9)] max-w-lg">Lawthentic is founded on a belief in straightforward, ethical legal practice. We focus on clear communication, careful preparation, and solutions that respect both the law and your circumstances.</p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="card-soft p-4 text-center">
              <div className="text-xl font-semibold text-[var(--coffee)]">2+</div>
              <div className="text-sm text-[rgba(0,0,0,0.6)]">Years Experience</div>
            </div>
            <div className="card-soft p-4 text-center">
              <div className="text-xl font-semibold text-[var(--coffee)]">400+</div>
              <div className="text-sm text-[rgba(0,0,0,0.6)]">Cases Handled</div>
            </div>
            <div className="card-soft p-4 text-center">
              <div className="text-xl font-semibold text-[var(--coffee)]">95%</div>
              <div className="text-sm text-[rgba(0,0,0,0.6)]">Client Satisfaction</div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
