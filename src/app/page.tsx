import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-8">
      <h1 className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">
        VAULT ANALYTICS
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-12">
        Sharp Tools for Sharp Bettors
      </p>
      <div className="space-x-12 text-lg">
        <Link href="/feed" className="text-yellow-500 hover:underline">Live Feed</Link>
        <Link href="/tools" className="text-gray-400 hover:text-white transition">Tools</Link>
      </div>
    </div>
  );
}
