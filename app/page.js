import Link from 'next/link'
import { courses } from '../data/content'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div style={{color:'#e8c779', fontWeight:700, letterSpacing:'2px', fontSize:'12px', textTransform:'uppercase'}}>
          Plateforme de formation professionnelle
        </div>
        <h1>La paie s'apprend.<br /><em>L'expertise se construit.</em></h1>
        <p>Parcours structurés Débutant et Expérimenté pour maîtriser la paie française, avec veille sociale actualisée et validée.</p>
        <div className="actions">
          <Link href="/catalogue" className="btn">Découvrir les formations V1</Link>
          <Link href="/actualites" className="btn secondary">Actualités paie</Link>
        </div>
      </section>
      <div className="container">
        <h2>Formations V1</h2>
        <p className="sub">7 modules fondamentaux. Contenus en cours de validation réglementaire.</p>
        <div className="cards">
          {courses.slice(0, 3).map(c => (
            <div key={c.id} className="card">
              <div className="card-content">
                <span className="tag">{c.level}</span>
                <h3>{c.title}</h3>
                <p style={{color:'var(--muted)', fontSize:'14px'}}>{c.description}</p>
                <Link href={`/lecon/${c.slug}`} className="btn" style={{marginTop:'12px'}}>Ouvrir</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
