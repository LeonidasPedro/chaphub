import { useEffect, useRef, useState } from 'react';

export default function useCountUp(target, duration = 1800) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            let start = null;
            const step = (ts) => {
              if (start === null) start = ts;
              const progress = Math.min((ts - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.floor(target * eased));
              if (progress < 1) requestAnimationFrame(step);
              else setValue(target);
            };
            requestAnimationFrame(step);
            obs.unobserve(node);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [target, duration]);

  const formatted = target > 9999 ? value.toLocaleString('pt-BR') : value.toString();
  return [ref, formatted];
}
