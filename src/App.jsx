import React, { useState, useEffect } from 'react';
import Reliquary from './components/Reliquary';
import Altar from './components/Altar';
import Summoner from './components/Summoner';
import { Skull } from 'lucide-react';

export default function App() {
  const [deities, setDeities] = useState([
    { id: 1, name: "ABYSS-WALKER", prompt: "CONSUME IDLE CYCLES", avatar: "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=abyss&backgroundColor=000" },
    { id: 2, name: "CHRONOS-LICH", prompt: "REVERSE DATA FLOW", avatar: "https://api.dicebear.com/7.x/bottts-neutral/svg?seed=chronos&backgroundColor=000" }
  ]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-400 font-sans p-4 md:p-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-12 border-b border-orange-950/30 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 border border-orange-600 rotate-45 bg-black shadow-[0_0_15px_rgba(255,60,0,0.3)]">
            <Skull className="-rotate-45 text-orange-600 w-6 h-6" />
          </div>
          <h1 className="font-serif text-2xl tracking-tighter text-white">KRYV<span className="text-orange-600">.SECT</span></h1>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-orange-700 hover:bg-orange-500 text-black font-black px-6 py-2 text-xs uppercase transition-all"
        >
          Invoke Deity
        </button>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <Reliquary deities={deities} />
        <Altar deities={deities} />
      </div>

      {showModal && (
        <Summoner 
          onClose={() => setShowModal(false)} 
          onSummon={(d) => setDeities([...deities, { ...d, id: Date.now() }])} 
        />
      )}
    </div>
  );
}
