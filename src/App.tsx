/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';

export default function App() {
  const [clickStep, setClickStep] = useState(0);
  const [popups, setPopups] = useState<Array<{ id: number; text: string; x: number; y: number }>>([]);

  const handleItemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;

    const words = ['Wszystkiego', 'Najlepszego', 'Z Okazji', 'Dnia Ojca!'];
    const text = words[clickStep % words.length];

    setClickStep((prev) => prev + 1);

    const newId = Date.now();
    setPopups((prev) => [...prev, { id: newId, text, x, y }]);

    setTimeout(() => {
      setPopups((prev) => prev.filter((p) => p.id !== newId));
    }, 2000);
  };

  const bottomItems = ['🌿', '🐚', '🌿', '🦀', '🌿', '🐙', '🌿'];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#00d2ff] to-[#035b96] font-sans text-white text-center">
      {/* Kartka z życzeniami */}
      <div className="relative z-10 flex flex-col items-center pt-[25vh]">
        <div className="bg-white/15 px-10 py-8 rounded-[20px] backdrop-blur-md border-2 border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] pointer-events-none">
          <h1 className="text-4xl md:text-[3.5rem] m-0 leading-[1.3] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)] font-semibold tracking-wide">
            Wszystkiego najlepszego<br />
            z okazji Dnia Ojca,<br />
            i jak najwięcej ryb! 🎣
          </h1>
        </div>
      </div>

      {/* Rybki animowane */}
      <div className="fish fish1">🐟</div>
      <div className="fish fish2">🐠</div>
      <div className="fish fish3">🐡</div>
      <div className="fish fish4">🦈</div>
      <div className="fish fish5">🐟</div>
      <div className="fish fish6">🐠</div>
      <div className="fish fish7">🐡</div>
      <div className="fish fish8">🦈</div>
      <div className="fish fish9">🐟</div>
      <div className="fish fish10">🐠</div>

      {/* Bąbelki powierza */}
      <div className="bubble bubble1 pointer-events-none"></div>
      <div className="bubble bubble2 pointer-events-none"></div>
      <div className="bubble bubble3 pointer-events-none"></div>
      <div className="bubble bubble4 pointer-events-none"></div>
      <div className="bubble bubble5 pointer-events-none"></div>

      {/* Wyskakujące teksty */}
      {popups.map((p) => (
        <div
          key={p.id}
          className="absolute z-50 text-3xl font-bold text-yellow-300 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-float-up whitespace-nowrap"
          style={{ left: p.x, top: p.y }}
        >
          {p.text}
        </div>
      ))}

      {/* Dno morza z klikalnymi elementami */}
      <div className="absolute bottom-0 w-full text-[4rem] z-[8] opacity-90 flex justify-around bg-black/10 pb-2 shadow-[0_-10px_20px_rgba(0,0,0,0.2)] select-none">
        {bottomItems.map((item, i) => (
          <span
            key={i}
            onClick={handleItemClick}
            className="cursor-pointer hover:scale-125 active:scale-95 transition-transform origin-bottom"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

