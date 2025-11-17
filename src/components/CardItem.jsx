import React, { useRef } from 'react'

export default function CardItem({ item, onCopy }) {
  const rippleRef = useRef(null)

  const handleClick = () => {
    const ripple = rippleRef.current
    if (ripple) {
      ripple.classList.remove("animate-ping")
      void ripple.offsetWidth
      ripple.classList.add("animate-ping")
    }
    onCopy(item.jp)
  }

  return (
    <article
      onClick={handleClick}
      className="
        group
    relative cursor-pointer 
    bg-neutral-900/80 border border-white/10 rounded-2xl 
    p-4 shadow-md card-hover overflow-hidden active:scale-95 transition-transform
  "
    >

      {/* Ripple effect */}
      <span
        ref={rippleRef}
        className="absolute inset-0 rounded-2xl bg-green-500/20 scale-0 opacity-0"
      ></span>

      {/* Two column layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col col-span-1">
          
          {/* EN (default gray → hover white glow) */}
          <div className="
            text-2xl font-bold break-words leading-snug 
            text-gray-300
            group-hover:text-white 
            group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]
            transition
          ">
            {item.en}
          </div>

          {/* JP (default gray → hover white glow) */}
          <div className="
            text-sm break-words text-gray-400
            group-hover:text-white
            group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]
            transition
          ">
            {item.jp}
          </div>
        </div>

        {/* Divider (Desktop Only) */}
        <div className="hidden sm:flex justify-center">
          <div className="border-l border-white/20 h-full"></div>
        </div>

        {/* RIGHT SIDE (Descriptions) */}
        <div className="flex flex-col gap-1 col-span-1">
          {[item.desc1, item.desc2, item.desc3, item.desc4].map((t, i) => (
            <p
              key={i}
              className="
                text-sm text-gray-400 transition
                group-hover:text-green-400 
                group-hover:drop-shadow-[0_0_6px_rgba(0,255,0,0.7)]
              "
            >
              {t}
            </p>
          ))}
        </div>

      </div>

      {/* Mobile divider */}
      <div className="sm:hidden my-3 border-t border-white/20"></div>

    </article>
  )
}
