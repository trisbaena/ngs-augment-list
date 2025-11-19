import { useState, useCallback } from "react";

export default function useCopy(timeout = 1500) {
  const [toastMessage, setToastMessage] = useState("");

  const copy = useCallback((text) => {
    try {
      navigator.clipboard.writeText(text);
      setToastMessage("Copied!!");
      setTimeout(() => setToastMessage(""), timeout);
    } catch (e) {
      console.error("Copy failed", e);
      setToastMessage("Copy failed");
      setTimeout(() => setToastMessage(""), timeout);
    }
  }, [timeout]);

  return { toastMessage, copy };
}
