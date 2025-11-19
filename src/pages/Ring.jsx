import { ringData } from "../data/ringData";

export default function Ring({ onCopy }) {

  const handleCopy = (item) => {
    const text = `${item.type}／${item.jpname}`;
    onCopy(text);   
  };

  return (
    <div className="text-white px-4 pb-20 pt-28">
      <h1 className="text-center text-3xl font-bold mb-8">SKill Ring</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {ringData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCopy(item)}
            className="cursor-pointer bg-neutral-800/60 p-5 rounded-xl border border-neutral-700
                      hover:bg-neutral-700/70 transition-all"
          >
            <h2 className="text-xl font-bold text-gray-200">{item.enname}</h2>

            <div className="w-full h-px bg-neutral-600 my-2"></div>

            <p className="text-gray-400">{item.desc}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
