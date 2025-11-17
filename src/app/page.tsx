import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold text-yellow-500 mb-4">VAULT ANALYTICS</h1>
      <p className="text-xl mb-8 text-gray-300">Sharp Tools for Sharp Bettors</p>
      <div className="space-x-4">
        <Link href="/feed" className="bg-yellow-500 text-black px-6 py-3 rounded font-bold hover:bg-yellow-400 transition">
          Live Feed
        </Link>
        <Link href="/tools" className="bg-gray-800 text-white px-6 py-3 rounded border border-gray-600 hover:bg-gray-700 transition">
          Tools
        </Link>
      </div>
    </div>
  );
}
