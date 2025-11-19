import React from "react";
import { exData } from "../data";

export default function ExAugments({ onCopy }) {
  return (
    <main className="p-6 pt-24 pb-28">
      <h1 className="text-3xl font-bold mb-6 text-center">Ex Augments</h1>
      {/* Info Box: Suffix Effects */}
<div className="w-fit mx-auto mb-8 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
  <div className="text-center text-lg font-semibold py-3 border-b border-white/10">
    Suffix Effects
  </div>

  <div className="grid grid-cols-2 text-gray-200 text-sm">
    {/* Header Row */}
    <div className="px-4 py-2 font-bold border-r border-white/10 text-center">Suffix</div>
    <div className="px-4 py-2 font-bold text-center">Effect</div>

    {/* Row H */}
    <div className="px-4 py-2 border-t border-r border-white/10 text-center">H</div>
    <div className="px-4 py-2 border-t border-white/10">+25 HP</div>

    {/* Row D */}
    <div className="px-4 py-2 border-t border-r border-white/10 text-center">D</div>
    <div className="px-4 py-2 border-t border-white/10">Damage Resistance +1%</div>

    {/* Row P */}
    <div className="px-4 py-2 border-t border-r border-white/10 text-center">P</div>
    <div className="px-4 py-2 border-t border-white/10">+3 PP</div>

    {/* Row R */}
    <div className="px-4 py-2 border-t border-r border-white/10 text-center">R</div>
    <div className="px-4 py-2 border-t border-white/10">All Down Resistance +5%</div>

    {/* Row X */}
    <div className="px-4 py-2 border-t border-r border-white/10 text-center">X</div>
    <div className="px-4 py-2 border-t border-white/10">+15 HP, +2 PP</div>
  </div>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {exData.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onCopy(item.en + " II ?")}
            className="text-left w-full h-full flex flex-col justify-start p-4
                       rounded-lg bg-transparent hover:bg-white/5 transition
                       border border-white/5"
          >
            <h1 className="text-2xl font-bold text-gray-200 break-words">
              {item.en}
            </h1>

            <div className="border-t border-white/10 mt-2 mb-3" />

            <p className="text-sm text-gray-300 break-words">{item.desc1}</p>
            <p className="text-sm text-gray-300 break-words">{item.desc2}</p>
            <p className="text-sm text-gray-300 break-words">{item.desc3}</p>
          </button>
        ))}
      </div>
    </main>
  );
}
