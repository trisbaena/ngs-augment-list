export default function Toast({ message }) {
  if (!message) return null;

  const suffixText = "are Copied!!";

  const isSuffix = message.trim().endsWith(suffixText);
  const copiedText = isSuffix
    ? message.replace(suffixText, "").trim()
    : message;
  const suffix = isSuffix ? suffixText : "";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="
        px-5 py-2 rounded-xl 
        bg-gray-700/50 text-white 
        shadow-lg backdrop-blur-sm 
        flex items-center gap-2
      ">
        <span className="font-bold text-green-400 drop-shadow-[0_0_6px_rgba(0,255,100,0.9)]">
          {copiedText}
        </span>
        <span>{suffix}</span>

      </div>
    </div>
  );
}
