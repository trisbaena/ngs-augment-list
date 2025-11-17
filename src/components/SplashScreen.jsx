import React, { useEffect, useState } from "react";
import logo from "/favicon.png"; // ใช้ไอคอนที่คุณอัปโหลด

export default function SplashScreen() {
  const [fade, setFade] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 900);     // เริ่ม fade-out
    const t2 = setTimeout(() => setHide(true), 1600);    // ซ่อน splash ออกไปเลย

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
      {/* เส้นเรืองแสง */}
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,198,255,0.25),transparent_60%)]"></div>

      {/* จุดดาว */}
      <div className="absolute w-full h-full bg-[url('https://pbs.twimg.com/profile_images/1402478948009725953/rVFnBkHw_400x400.png')] opacity-40"></div>

      {/* โลโก้ NGS */}
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
