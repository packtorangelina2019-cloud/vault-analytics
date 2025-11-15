import Link from 'next/link';

export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'black',color:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'2rem'}}>
      <h1 style={{fontSize:'4rem',fontWeight:'bold',color:'#ffd700',marginBottom:'1rem'}}>VAULT ANALYTICS</h1>
      <p style={{fontSize:'1.25rem',marginBottom:'2rem',color:'#ccc'}}>Sharp Tools for Sharp Bettors</p>
      <div>
        <Link href="/feed" style={{background:'#ffd700',color:'black',padding:'0.75rem 1.5rem',borderRadius:'0.5rem',fontWeight:'bold',marginRight:'1rem'}}>Live Feed</Link>
        <Link href="/tools" style={{background:'#333',color:'white',padding:'0.75rem 1.5rem',borderRadius:'0.5rem',border:'1px solid #555'}}>Tools</Link>
      </div>
    </div>
  );
}
