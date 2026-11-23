import Link from 'next/link'
import { courses } from '../../data/content'

export default function Catalogue() {
  return (
    <div className="container">
      <h1>Catalogue V1 — Fondamentaux de la paie</h1>
      <p className="sub">Parcours Débutant. Tous les modules sont en cours de validation réglementaire.</p>
      {courses.map(c => (
        <div key={c.id} className="module">
          <div>
            <h3 style={{margin:0}}>{c.title}</h3>
            <p style={{margin:'4px 0 0', color:'var(--muted)', fontSize:'14px'}}>{c.description}</p>
          </div>
          <div>
            <span className="status">{c.status}</span>
            {' '}
            <Link href={`/lecon/${c.slug}`} className="btn" style={{padding:'8px 14px', fontSize:'14px'}}>Ouvrir la leçon</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
