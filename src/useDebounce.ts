import { useEffect, useState } from "react";

interface UseDebounceOptions {
  startActive?: boolean;
}

export default function useDebounce(delay: number, callback: Function, options?: UseDebounceOptions) {
  const [active, setActive] = useState<boolean>(options?.startActive ?? true);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const toggleActive = () => setActive(prev => !prev);

  useEffect(() => {
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!active) {
      clearInterval(timer);
    } else {
      setTimer(setInterval(() => callback(), delay));
    }
  }, [active]);


  return { active, toggleActive };
}