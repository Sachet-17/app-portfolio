"use client";
import { useEffect, useState } from "react";

type Props = { words: string[]; speed?: number; pause?: number };

export default function Typing({ words, speed = 80, pause = 1100 }: Props) {
  const [w, setW] = useState(0);
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  useEffect(() => {
    const current = words[w];
    let t: number;
    if (dir === 1 && i === current.length) {
      t = window.setTimeout(() => setDir(-1), pause);
    } else if (dir === -1 && i === 0) {
      t = window.setTimeout(() => {
        setW((w + 1) % words.length);
        setDir(1);
      }, 300);
    } else {
      t = window.setTimeout(() => setI(i + dir), speed);
    }
    return () => window.clearTimeout(t);
  }, [i, dir, w, words, speed, pause]);

  return (
    <span className="whitespace-pre">
      {words[w].slice(0, i)}
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
}
