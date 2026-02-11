import React from 'react'

export default function Logo(){
  return (
    <a href="#home" className="flex items-center" aria-label="Lawthentic logo">
      <div
        aria-hidden="true"
        style={{
          width: 70,
          height: 70,
          backgroundColor: 'var(--coffee)',
          WebkitMaskImage: "url('/assets/logo.png')",
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          WebkitMaskPosition: 'center',
          maskImage: "url('/assets/logo.png')",
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          maskPosition: 'center'
        }}
      />
      <span className="ml-0 text-[var(--coffee)] font-serif font-semibold text-xl">Lawthentic</span>
    </a>
  )
}
