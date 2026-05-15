import { useEffect, useState } from 'react';

export default function useTyped(words, { typeMs = 65, eraseMs = 35, holdMs = 1800, gapMs = 300, initialDelay = 1200 } = {}) {
  const [text, setText] = useState('');

  useEffect(() => {
    let wi = 0;
    let ci = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wi];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(tick, holdMs);
          return;
        }
        timer = setTimeout(tick, typeMs);
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
          timer = setTimeout(tick, gapMs);
          return;
        }
        timer = setTimeout(tick, eraseMs);
      }
    };

    timer = setTimeout(tick, initialDelay);
    return () => clearTimeout(timer);
  }, [words, typeMs, eraseMs, holdMs, gapMs, initialDelay]);

  return text;
}
