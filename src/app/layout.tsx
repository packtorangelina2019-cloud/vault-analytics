import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Vault Analytics',
  description: 'Sharp Tools for Sharp Bettors',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{background:'black',color:'white',padding:'1rem'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto',display:'flex',justifyContent:'space-between'}}>
            <Link href="/" style={{fontSize:'1.5rem',fontWeight:'bold',color:'#ffd700'}}>VAULT</Link>
            <div>
              <Link href="/feed" style={{marginRight:'1rem',color:'white'}}>Live Feed</Link>
              <Link href="/tools" style={{color:'white'}}>Tools</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
