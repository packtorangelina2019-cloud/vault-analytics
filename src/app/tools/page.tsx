'use client';
import { useState, useEffect } from 'react';

export default function ToolsPage() {
  const [bankroll, setBankroll] = useState({ current: 1000, starting: 1000 });
  const [odds, setOdds] = useState('');
  const [prob, setProb] = useState('');
  const [ev, setEv] = useState(0);
  const [kelly, setKelly] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('vault_bankroll');
    if (saved) setBankroll(JSON.parse(saved));
  }, []);

  const calculate = () => {
    const o = odds[0] === '+' ? parseInt(odds)/100 : -100/parseInt(odds);
    const decimal = odds[0] === '+' ? 1 + o : 1 - o;
    const fairProb = 1 / (decimal + 1);
    const edge = (prob / 100) - fairProb;
    setEv(edge * 100);
    const k = edge > 0 ? edge / Math.max(o, 1/o) : 0;
    setKelly(k * 100);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">Betting Tools</h1>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-6">
        <h3 className="text-xl font-bold text-yellow-500 mb-4">EV + Kelly Calculator</h3>
        <input placeholder="Odds (+150 or -110)" value={odds} onChange={e => setOdds(e.target.value)} className="w-full p-3 mb-3 bg-gray-800 border border-gray-600 rounded text-white" />
        <input placeholder="Your Probability (%)" value={prob} onChange={e => setProb(e.target.value)} className="w-full p-3 mb-3 bg-gray-800 border border-gray-600 rounded text-white" />
        <button onClick={calculate} className="bg-yellow-500 text-black px-6 py-2 rounded font-bold">
          CALCULATE
        </button>
        {ev !== 0 && (
          <div className="mt-4">
            <p className={`font-bold ${ev > 0 ? 'text-green-400' : 'text-red-400'}`}>EV: {ev > 0 ? '+' : ''}{ev.toFixed(2)}%</p>
            <p className="text-gray-300">Kelly Stake: {kelly.toFixed(2)}% of bankroll</p>
          </div>
        )}
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-bold text-yellow-500 mb-4">Bankroll</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>Current: <strong>${bankroll.current.toFixed(2)}</strong></div>
          <div>P&L: <strong className={bankroll.current > bankroll.starting ? 'text-green-400' : 'text-red-400'}>${(bankroll.current - bankroll.starting).toFixed(2)}</strong></div>
        </div>
      </div>
    </div>
  );
}
