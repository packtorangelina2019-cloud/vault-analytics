'use client';
import { useState } from 'react';

export default function BetSlip() {
  const [isOpen, setIsOpen] = useState(false);
  const bets = []; // will be populated from parlay state later

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-yellow-400 transition z-40"
      >
        BET SLIP ({bets.length})
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-2xl z-40">
          <h3 className="text-xl font-bold text-yellow-500 mb-4">Your Bet Slip</h3>
          {bets.length === 0 ? (
            <p className="text-gray-400">No bets added yet</p>
          ) : (
            <div>
              {bets.map((b, i) => (
                <div key={i} className="text-sm mb-2 pb-2 border-b border-gray-800">
                  {b.market} <strong>{b.odds}</strong>
                </div>
              ))}
              <button className="w-full mt-4 bg-green-600 text-white py-3 rounded font-bold hover:bg-green-500">
                PLACE BET
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
