import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/' || location.pathname === ''

  return (
    <header className="
  fixed top-0 left-0 right-0 z-50
  w-full py-4 px-6 flex items-center justify-between
  bg-black/80 backdrop-blur-md
  border-b border-white/10
">
      <div className="flex items-center gap-4">
        {!isHome && (
          <button
            onClick={() => navigate('/')}
            className="text-gray-300 hover:text-white p-2 rounded-md transition"
            aria-label="Back to home"
          >
            ←
          </button>
        )}
        <Link to="/" className="text-xl font-semibold tracking-tight">
          
<div className="flex items-center space-x-2">
  <img
    src="/inf.png"
    alt="logo"
    className="w-8 h-8 object-contain"
  />
  <span className="text-white font-bold tracking-wide">
    インフィニタム SHIP 4 JP
  </span>
</div>


        </Link>
      </div>

      <nav className="flex gap-3">
        <nav className="flex items-center space-x-4 text-white">
  <Link to="/radi" className="hover:text-blue-300">Radi</Link>
  <span className="opacity-40">|</span>

  <Link to="/raaza" className="hover:text-blue-300">Raaza</Link>
  <span className="opacity-40">|</span>

  <Link to="/meta" className="hover:text-blue-300">Meta</Link>
  <span className="opacity-40">|</span>

  <Link to="/ex-augments" className="hover:text-blue-300">Ex Augments</Link>
  <span className="opacity-40">|</span>

  <Link to="/ring" className="hover:text-blue-300">Skill Ring</Link>
</nav>


      </nav>
    </header>
  )
}
