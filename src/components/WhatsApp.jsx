import React from 'react'
import { motion } from 'framer-motion'

export default function WhatsApp(){
  const waLink = 'https://wa.me/918369165375'
  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full shadow-lg text-white hover:scale-105 transform-gpu"
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: [12, -6, 0], opacity: 1 }}
      transition={{ delay: 0.6, duration: 1.1 }}
      style={{ backgroundColor: '#1f7a4f' }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M21 3.001a11.94 11.94 0 00-16.95 0 11.94 11.94 0 000 16.95L3 21l1.05-2.99A11.94 11.94 0 0018 5.99 11.94 11.94 0 0021 3.001z" fill="#115e3a" opacity="0.05"/>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.671.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.885-.789-1.48-1.763-1.652-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.148-.173.197-.298.297-.497.099-.198.05-.372-.025-.52-.075-.149-.671-1.612-.92-2.207-.242-.579-.487-.5-.671-.51l-.572-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.198 2.095 3.2 5.076 4.487 3.98 1.64 3.98 1.094 4.693 1.026.148-.074 1.758-.718 2.007-1.413.248-.697.248-1.295.173-1.413-.074-.116-.272-.173-.57-.322z" fill="#fff"/>
      </svg>
      <span className="text-sm font-medium">WhatsApp</span>
    </motion.a>
  )
}
