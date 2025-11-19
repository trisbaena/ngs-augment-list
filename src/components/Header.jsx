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
          インフィニタム
        </Link>
      </div>

      <nav className="flex gap-3">
        <Link to="/radi" className="px-3 py-1 rounded-md text-sm hover:bg-white/6">Radi</Link>
        <Link to="/raaza" className="px-3 py-1 rounded-md text-sm hover:bg-white/6">Raaza</Link>
        <Link to="/meta" className="px-3 py-1 rounded-md text-sm hover:bg-white/6">Meta</Link>
        <Link to="/ex-augments" className="px-3 py-1 rounded-md text-sm hover:bg-white/6">Ex Augments</Link>
        <Link to="/ring" className="px-3 py-1 rounded-md text-sm hover:bg-white/6">Skill Ring</Link>

      </nav>
    </header>
  )
}
