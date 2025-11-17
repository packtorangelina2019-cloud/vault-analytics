import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Vault Analytics',
  description: 'Sharp Tools for Sharp Bettors',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <nav className="bg-black border-b border-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-yellow-500">VAULT</Link>
            <div className="space-x-6">
              <Link href="/feed" className="hover:text-yellow-500 transition">Live Feed</Link>
              <Link href="/tools" className="hover:text-yellow-500 transition">Tools</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
