import React from 'react'

export default function Footer() {
  return (
    <footer 
      className="
        fixed bottom-0 left-0 right-0 z-40
        w-full py-3 px-6 
        flex items-center justify-center
        bg-black/80 backdrop-blur-md
        border-t border-white/10
        text-gray-300 text-sm
      "
    >
       <a href="https://discord.gg/Qspvfk7dPQ" target="_blank" rel="noreferrer" className="underline">
          インフィニタム SHIP 4 JP — © 2025</a> 

    </footer>
  )
}
