import { courses } from '../../../data/content'
import { notFound } from 'next/navigation'

export default function Lecon({ params }) {
  const course = courses.find(c => c.slug === params.slug)
  if (!course) notFound()

  return (
    <div className="container" style={{maxWidth:'900px'}}>
      <p style={{fontSize:'13px', color:'var(--muted)'}}>
        <a href="/catalogue">Catalogue</a> › {course.title}
      </p>
      <h1>{course.title}</h1>
      <p style={{color:'var(--muted)'}}>Niveau {course.level} • {course.duration} • {course.status}</p>

      {course.content?.warning && (
        <div className="warning">
          <strong>Source officielle :</strong> {course.content.warning}
        </div>
      )}

      <div className="section">
        <h2>Schéma de la chaîne de calcul</h2>
        <div className="schema">
          <div className="schema-step">Pièces<br/><span className="muted-small">Contrat, période</span></div>
          <div className="schema-step">Règle<br/><span className="muted-small">PASS / PMSS</span></div>
          <div className="schema-step">Prorata<br/><span className="muted-small">Selon situation</span></div>
          <div className="schema-step">Assiette<br/><span className="muted-small">Plafonnée</span></div>
          <div className="schema-step">Bulletin<br/><span className="muted-small">Cotisations</span></div>
        </div>
        <p className="muted-small" style={{textAlign:'center'}}>De la situation réelle du salarié jusqu’au bulletin de paie</p>
      </div>

      {course.content?.pourquoi && (
        <div className="section">
          <h2>Pourquoi cette rubrique existe</h2>
          <p>{course.content.pourquoi}</p>
        </div>
      )}

      {course.content?.pourquoiChange && (
        <div className="section">
          <h2>Pourquoi le montant change chaque année</h2>
          <p>{course.content.pourquoiChange}</p>
          <div className="visual-box">
            <div className="big-number">+1,74 %</div>
            <div>Augmentation annoncée 2027</div>
            <div className="muted-small">Basée sur l’évolution du salaire moyen par tête</div>
          </div>
        </div>
      )}

      {course.content?.roleBulletin && (
        <div className="section">
          <h2>Son rôle sur le bulletin de paie</h2>
          <p>{course.content.roleBulletin}</p>
        </div>
      )}

      {course.content?.apparition && (
        <div className="section">
          <h2>Comment il apparaît / agit sur le bulletin</h2>
          <p>{course.content.apparition}</p>
        </div>
      )}

      {course.content?.formules && (
        <div className="section">
          <h2>Formules de proratisation — synthèse visuelle</h2>
          {course.content.formules.map((f, i) => (
            <div key={i} className="formula-card">
              <strong style={{color:'var(--navy)'}}>{f.cas}</strong>
              <div style={{fontFamily:'monospace', background:'#fff', padding:'10px', borderRadius:'8px', margin:'8px 0', border:'1px solid #e4e9f0', fontSize:'15px'}}>
                {f.formule}
              </div>
              <p className="muted-small" style={{margin:0}}>{f.note}</p>
            </div>
          ))}
          <p className="muted-small" style={{marginTop:'12px'}}>
            Sources : BOSS – Assiette générale (§ 690 à 760), article R. 242-2 CSS. Toujours vérifier la version en vigueur et le logiciel de paie.
          </p>
        </div>
      )}

      {course.content?.values && (
        <div className="section">
          <h2>Valeurs officielles annoncées 2027</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:'12px', margin:'12px 0'}}>
            <div className="visual-box"><div className="big-number">48 900 €</div><div>PASS</div></div>
            <div className="visual-box"><div className="big-number">4 075 €</div><div>PMSS</div></div>
            <div className="visual-box"><div className="big-number">+1,74 %</div><div>Augmentation</div></div>
          </div>
          <p>{course.content.values.others}</p>
          <p className="muted-small">Source : {course.content.values.source}</p>
        </div>
      )}

      {course.content?.objectifs && (
        <div className="section">
          <h2>Objectifs de la leçon</h2>
          <ul>
            {course.content.objectifs.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </div>
      )}

      {course.content?.cas && (
        <div className="section">
          <h2>Cas concret (fictif)</h2>
          <p>{course.content.cas}</p>
        </div>
      )}

      {course.content?.controles && (
        <div className="section">
          <h2>Schéma de contrôle</h2>
          <ul>
            {course.content.controles.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      )}

      {course.content?.erreurs && (
        <div className="section">
          <h2>Erreurs à éviter</h2>
          <ul>
            {course.content.erreurs.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
      )}

      {course.content?.exercice && (
        <div className="section">
          <h2>Exercice</h2>
          <p>{course.content.exercice}</p>
        </div>
      )}

      <div className="section">
        <h2>Statut</h2>
        <p>Contenu pédagogique structuré avec schémas et formules. Validation réglementaire en attente de la publication de l’arrêté définitif 2027.</p>
      </div>

      <a href="/catalogue" className="btn">Retour au catalogue</a>
    </div>
  )
}
