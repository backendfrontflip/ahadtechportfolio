import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal(selector, options = {}) {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(selector, {
      distance: "24px",
      duration: 800,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      origin: "bottom",
      interval: 80,
      cleanup: true,
      ...options,
    });
  }, [selector, options]);
}
