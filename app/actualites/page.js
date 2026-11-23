import { news } from '../../data/content'

export default function Actualites() {
  return (
    <div className="container">
      <h1>Actualités paie & droit social</h1>
      <p className="sub">Veille validée humainement. Les articles réels seront publiés après contrôle des sources officielles.</p>
      {news.map(n => (
        <div key={n.id} className="section">
          <div style={{fontSize:'12px', color:'#8a6c2b', fontWeight:700}}>{n.category} • {n.date}</div>
          <h3 style={{margin:'8px 0'}}>{n.title}</h3>
          <p style={{color:'var(--muted)', margin:0}}>{n.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
