export default function FeedPage() {
  const bets = [
    { match: "Lakers vs Celtics", market: "LeBron Points O/U 28.5", odds: "+150", book: "DraftKings", ev: 5.2 },
    { match: "Nuggets vs Suns", market: "Jokic Rebounds O/U 12.5", odds: "-110", book: "FanDuel", ev: 4.1 },
  ];

  return (
    <div style={{padding:'2rem',maxWidth:'1200px',margin:'0 auto'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#ffd700',marginBottom:'1.5rem'}}>Live Feed</h1>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead>
          <tr style={{borderBottom:'1px solid #444'}}>
            <th style={{textAlign:'left',padding:'0.75rem 0'}}>Game / Player</th>
            <th style={{textAlign:'left',padding:'0.75rem 0'}}>Best Line</th>
            <th style={{textAlign:'left',padding:'0.75rem 0'}}>EV %</th>
          </tr>
        </thead>
        <tbody>
          {bets.map((b, i) => (
            <tr key={i} style={{borderBottom:'1px solid #333'}}>
              <td style={{padding:'1rem 0'}}>
                <strong>{b.match}</strong>
                <div style={{fontSize:'0.875rem',color:'#aaa'}}>{b.market}</div>
              </td>
              <td style={{padding:'1rem 0'}}>
                <span style={{color:'#4ade80',fontWeight:'bold'}}>{b.odds}</span> @ {b.book}
              </td>
              <td style={{padding:'1rem 0',color:'#4ade80',fontWeight:'bold'}}>+{b.ev}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
