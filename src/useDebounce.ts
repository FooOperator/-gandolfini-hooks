import { useEffect, useState } from "react";

interface UseDebouceProps {
  delay: number;
  callback: Function;
  options?: {
    startActive?: boolean;
  }
}

export default function useDebouce({ delay, callback, options }: UseDebouceProps) {
  const [active, setActive] = useState<boolean>(options.startActive ?? true);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const toggleActive = () => setActive(prev => !prev);

  useEffect(() => {
    setTimer(setTimeout(() => {
      if (active) {
        callback()
      }
    }, delay));

    return () => clearTimeout(timer);
  }, []);


  return { active, toggleActive };
}