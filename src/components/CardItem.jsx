import React from 'react';

function CardItem({ item, onCopy }) {
  // item expected: { jp, en, desc1, desc2, desc3, desc4 } or desc: []
  const title = item.en || item.jp || "";
  const descs = item.desc || [item.desc1, item.desc2, item.desc3, item.desc4].filter(Boolean);

  return (
    <button
      onClick={() => onCopy && onCopy(item)}
      className="text-left w-full h-full flex flex-col justify-start items-stretch p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
    >
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-gray-100 break-words">{title}</h2>
        <div className="border-t border-white/10 mt-2" />
      </div>

      <div className="mt-3 flex-1">
        {descs.map((d, i) => (
          <p key={i} className="text-sm text-gray-300 break-words">{d}</p>
        ))}
      </div>
    </button>
  );
}

export default React.memo(CardItem);
