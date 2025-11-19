import React, { useEffect, useState } from "react";
import logo from "/favicon.png"; 

export default function SplashScreen() {
  const [fade, setFade] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 900);     
    const t2 = setTimeout(() => setHide(true), 1600);    

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-ngs-space text-white
        transition-opacity duration-700
        ${fade ? "opacity-0" : "opacity-100"}
        overflow-hidden
      `}
    >
      {/* Line*/}
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,198,255,0.25),transparent_60%)]"></div>

      {/* Background */}
      <div className="absolute w-full h-full bg-[url('https://cdn.discordapp.com/attachments/987802293707632650/1440400502994112612/581943481_122149469054844736_6193446809905280480_n.jpg?ex=691e0501&is=691cb381&hm=187e2525451cc2538901bd62e7e5df044911d39578bff00efd9db82515f8d7af')] opacity-40"></div>

      {/*  NGS Logo */}
      <img
        src={logo}
        alt="NGS Logo"
        className="w-40 h-40 drop-shadow-[0_0_12px_rgba(0,198,255,0.9)] animate-pulse"
      />

      <div className="mt-4 text-lg font-semibold tracking-wide text-ngs-glow drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
        Loading…
      </div>
    </div>
  );
}
