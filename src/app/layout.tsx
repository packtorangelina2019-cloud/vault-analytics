import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <nav className="border-b border-gray-800 px-8 py-5 flex justify-between items-center">
          <Link href="/" className="text-3xl font-black tracking-tighter text-yellow-500">
            VAULT
          </Link>
          <div className="space-x-8 text-lg">
            <Link href="/feed" className="hover:text-yellow-500 transition">Live Feed</Link>
            <Link href="/tools" className="hover:text-yellow-500 transition">Tools</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
