'use client';
import { useState } from 'react';

export default function FeedPage() {
  const [parlay, setParlay] = useState<any[]>([]);

  const bets = [
    { match: "Lakers vs Celtics", market: "LeBron Points O/U 28.5", odds: "+150", book: "DraftKings", ev: 5.2 },
    { match: "Nuggets vs Suns", market: "Jokic Rebounds O/U 12.5", odds: "-110", book: "FanDuel", ev: 4.1 },
    { match: "Warriors vs Knicks", market: "Curry 3PM O/U 5.5", odds: "+175", book: "BetMGM", ev: 6.1 },
  ];

  const addToParlay = (bet: any) => {
    if (parlay.length >= 8) return alert("Max 8 legs");
    setParlay([...parlay, bet]);
  };

  const copyParlay = () => {
    const text = `PARLAY (${parlay.length} legs)\n${parlay.map(b => `${b.market} ${b.odds} @ ${b.book}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    alert("Parlay copied!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">Live Feed</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-3">Game / Player</th>
            <th>Best Line</th>
            <th>EV %</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bets.map((b, i) => (
            <tr key={i} className="border-b border-gray-800 hover:bg-gray-900">
              <td className="py-4">
                <strong>{b.match}</strong>
                <div className="text-sm text-gray-400">{b.market}</div>
              </td>
              <td>
                <span className="text-green-400 font-bold">{b.odds}</span> @ {b.book}
              </td>
              <td className="text-green-400 font-bold">+{b.ev}%</td>
              <td>
                <button onClick={() => addToParlay(b)} className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-bold">
                  + Slip
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {parlay.length > 0 && (
        <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-yellow-500 mb-4">Parlay Builder ({parlay.length} legs)</h3>
          {parlay.map((b, i) => (
            <div key={i} className="text-sm mb-1">
              {b.market} <strong>{b.odds}</strong> @ {b.book}
              <button onClick={() => setParlay(parlay.filter((_, idx) => idx !== i))} className="ml-2 text-red-400 text-xs">×</button>
            </div>
          ))}
          <button onClick={copyParlay} className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded font-bold">
            COPY PARLAY
          </button>
        </div>
      )}
    </div>
  );
}
