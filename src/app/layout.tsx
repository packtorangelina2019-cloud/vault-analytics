import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';
import BetSlip from '@/components/BetSlip';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <nav className="bg-black border-b border-gray-800 p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-yellow-500">VAULT</Link>
            <div className="flex items-center space-x-8">
              <Link href="/feed" className="hover:text-yellow-500 transition">Live Feed</Link>
              <Link href="/tools" className="hover:text-yellow-500 transition">Tools</Link>
              <button onClick={() => setAuthOpen(true)} className="bg-yellow-500 text-black px-6 py-2 rounded font-bold hover:bg-yellow-400 transition">
                LOGIN
              </button>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        <BetSlip />
      </body>
    </html>
  );
}
