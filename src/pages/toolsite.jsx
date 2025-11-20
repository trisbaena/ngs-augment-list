import React from "react";
import { FaGlobe, FaYoutube, FaDiscord, FaFileExcel } from "react-icons/fa";

export default function ToolSite() {
  const links = [
    {
      icon: <FaGlobe className="text-4xl text-blue-300" />,
      label: "NGS Costume Preview",
      url: "https://ngs.pso2-makapo.com/ngs-costume-type2/",
    },
    {
      icon: <FaGlobe className="text-4xl text-green-300" />,
      label: "Ark-Layer",
      url: "https://arks-layer.com/index.php",
    },
    {
      icon: <FaGlobe className="text-4xl text-yellow-300" />,
      label: "Phantasy Star Wiki",
      url: "https://pso2.arks-visiphone.com/wiki/Main_Page",
    },
    {
      icon: <FaGlobe className="text-4xl text-pink-300" />,
      label: "Bumped",
      url: "https://www.bumped.org/phantasy/",
    },
    {
      icon: <FaGlobe className="text-4xl text-purple-300" />,
      label: "PSO2:NGS JP WIKI",
      url: "https://pso2ngs.swiki.jp/index.php",
    },
    {
      icon: <FaYoutube className="text-4xl text-red-400" />,
      label: "PSO2 Emote Lobby Actions Playlist",
      url: "https://www.youtube.com/playlist?list=PLmAkTd5OT-ADEV5zteunH2rTkjNhUUA-i",
    },
    {
      icon: <FaDiscord className="text-4xl text-indigo-400" />,
      label: "Phantasy Star Fleet",
      url: "https://discord.gg/Kwm8VpVwKt",
    },
    {
      icon: <FaFileExcel className="text-4xl text-green-400" />,
      label: "NGS Gear Planner",
      url: "https://docs.google.com/spreadsheets/d/1ShT8I1wj9mGh-hGXqF0j9tvUU_jkYLvGd4gPZjNzRpo/edit?gid=1320512317#gid=1320512317",
    },
    {
      icon: <FaFileExcel className="text-4xl text-green-400" />,
      label: "NGS Damage Calculator",
      url: "https://docs.google.com/spreadsheets/d/1SgSmKVXDZet4F8Ot6-PsbUSUPHGe2eVChUVA9uS3g0k/edit#gid=0",
    },
    {
      icon: <FaFileExcel className="text-4xl text-green-400" />,
      label: "PSO2:NGS Attack Table",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQj8D29IiNYuH3-Vx474oYbyjWNrbTcUDE6z4g6XuWYTvHAfPpufnGygZxenANvMzYrdVylc3TqeGZ3/pubhtml",
    },
    {
      icon: <FaFileExcel className="text-4xl text-green-400" />,
      label: "NGS Title Tracker",
      url: "https://docs.google.com/spreadsheets/d/1uIq-YaJHOJfKp6UxShyTbX1IjO1M51Tg1xR7ycVCTDU/edit?gid=0#gid=0",
    },
    {
      icon: <FaFileExcel className="text-4xl text-green-400" />,
      label: "NGS Verification Data Storage",
      url: "https://docs.google.com/spreadsheets/d/1_OgubzM5QFe4rua4Xu0GSMAI8Idoq8r2yI8Ioyec6oY/edit?gid=1783287573#gid=1783287573",
    },
  ];

  return (
    <div className="pt-24 p-6 flex flex-col items-center text-white w-full">

      
      <div className="w-full max-w-4xl bg-neutral-800/60 border border-neutral-700 rounded-xl p-5 shadow-md backdrop-blur-sm text-center">
        <h2 className="text-xl font-bold mb-3 text-blue-300">Important link Archive</h2>
        
      </div>

      
      <div className="w-full max-w-4xl border-b border-neutral-700 my-10"></div>

      
      <div className="w-full max-w-4xl bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-md shadow-lg">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">

          {links.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                {item.icon}

                <span className="mt-4 text-sm text-neutral-200 group-hover:text-white transition leading-relaxed max-w-[200px]">
                  {item.label}
                </span>
              </a>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
