import React, { useState, useCallback } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CardItem from './components/CardItem'
import Toast from './components/Toast'
import SplashScreen from "./components/SplashScreen";

import { radiData, raazaData, metaData } from './data'


function ListPage({ title, data, onCopy }) {
  return (
    <main className="p-6 pt-24">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      {/* 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((item, idx) => (
          <CardItem key={idx} item={item} onCopy={onCopy} />
        ))}
      </div>
    </main>
  )
}

export default function App() {
  const [toast, setToast] = useState({ show: false, text: '' })
  const timeoutRef = React.useRef(null)

  const handleCopy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text)

      setToast({ show: true, text: 'Copied!!' })

      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setToast({ show: false, text: '' })
      }, 1600)
    } catch (err) {
      setToast({ show: true, text: 'Copy failed' })
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setToast({ show: false, text: '' })
      }, 1600)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-100">
      
      <SplashScreen />
      <Header />

      <Routes>
        <Route
          path="/"
          element={(
            <main className="p-6 pt-24">
  <div className="flex flex-col items-center gap-6">

    <Link to="/radi" className="w-full max-w-2xl">
      <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 card-hover">
        <h1 className="text-3xl font-bold mb-6 text-center">Radi Augments</h1>        
      </div>
    </Link>

    <Link to="/raaza" className="w-full max-w-2xl">
      <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 card-hover">
        <h1 className="text-3xl font-bold mb-6 text-center">Raaza Augments</h1>  
        
      </div>
    </Link>

    <Link to="/meta" className="w-full max-w-2xl">
      <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 card-hover">
        <h1 className="text-3xl font-bold mb-6 text-center">Meta Augments</h1>  
        
      </div>
    </Link>

  </div>
</main>

          )}
        />

        <Route path="/radi" element={<ListPage title="Radi Augments" data={radiData} onCopy={handleCopy} />} />
        <Route path="/raaza" element={<ListPage title="Raaza Augments" data={raazaData} onCopy={handleCopy} />} />
        <Route path="/meta" element={<ListPage title="Meta Augments" data={metaData} onCopy={handleCopy} />} />

      </Routes>

      <Footer />

      <Toast show={toast.show} text={toast.text} />
    </div>
  )
}
