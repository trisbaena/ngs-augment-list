export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="px-5 py-2 rounded-xl bg-green-600 text-white shadow-lg animate-toastIn flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
             viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 
               01-1.414 0L3.293 9.414a1 1 0 111.414-1.414L8 
               11.293l6.293-6.293a1 1 0 011.414 0z"
            clipRule="evenodd" />
        </svg>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}
