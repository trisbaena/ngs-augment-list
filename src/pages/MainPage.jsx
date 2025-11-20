import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaGlobe, FaTshirt, FaSteam } from "react-icons/fa";

export default function MainPage() {
  return (
    <main className="pt-24 p-6 flex flex-col gap-6 items-center text-white">  

      <h1 className="text-3xl font-bold">Welcome to インフィニタム</h1>

      <div className="flex flex-col gap-4 w-full max-w-lg">
        <Link to="/radi" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">
          Radi Augments
        </Link>
        <Link to="/raaza" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">
          Raaza Augments
        </Link>
        <Link to="/meta" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">
          Meta Augments
        </Link>
        <Link to="/ex-augments" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">
          EX Augments
        </Link>
        <Link to="/ring" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">
          Skill Ring
        </Link>
        <Link to="/toolsite" className="p-4 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition">
          Toolsite and Important NGS Data
        </Link>
      </div>

      <section className="w-full max-w-4xl mt-16 mb-20 px-4 flex flex-col items-center">

        <div className="w-full bg-neutral-800/60 border border-neutral-700 rounded-xl p-5 shadow-md backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-3 text-blue-300">📢 Announcements</h2>
          <ul className="list-disc list-inside text-neutral-300 leading-relaxed">
            <li>インフィニタム (Infinitum) ยินดีต้อนรับผู้เล่นใหม่และเก่าทุกท่าน</li>
            <li>สามารถ Join Discord เพื่อเข้าร่วมได้เสมอ</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-12 text-center">

          <a
            href="https://discord.gg/Qspvfk7dPQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <FaDiscord className="text-blue-400 text-5xl group-hover:scale-110 transition-transform" />
            <span className="mt-3 text-sm text-neutral-300 group-hover:text-white transition">
              Discord
            </span>
          </a>

          <a
            href="https://arks-layer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <FaGlobe className="text-green-300 text-5xl group-hover:scale-110 transition-transform" />
            <span className="mt-3 text-sm text-neutral-300 group-hover:text-white transition">
              Ark-Layer&apos;s Tweaker
            </span>
          </a>

          <a
            href="https://www.bumped.org/phantasy/category/scratch/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <FaTshirt className="text-pink-300 text-5xl group-hover:scale-110 transition-transform" />
            <span className="mt-3 text-sm text-neutral-300 group-hover:text-white transition">
              Phantasy Star Fan Blog
            </span>
          </a>

          <a
            href="https://steamcommunity.com/id/IAMVarrel64BIT/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <FaSteam className="text-gray-300 text-5xl group-hover:scale-110 transition-transform" />
            <span className="mt-3 text-sm text-neutral-300 group-hover:text-white transition">
              Dev contact
            </span>
          </a>

        </div>

      </section>

    </main>
  );
}
