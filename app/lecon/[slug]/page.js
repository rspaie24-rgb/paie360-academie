import { courses } from '../../../data/content'
import { notFound } from 'next/navigation'

export default function Lecon({ params }) {
  const course = courses.find(c => c.slug === params.slug)
  if (!course) notFound()

  return (
    <div className="container" style={{maxWidth:'860px'}}>
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

      {course.content?.modesCalcul && (
        <div className="section">
          <h2>Modes de calcul selon la situation</h2>
          {course.content.modesCalcul.map((m, i) => (
            <div key={i} style={{marginBottom:'16px'}}>
              <strong>{m.titre}</strong>
              <p style={{margin:'4px 0 0'}}>{m.detail}</p>
            </div>
          ))}
        </div>
      )}

      {course.content?.values && (
        <div className="section">
          <h2>Valeurs officielles annoncées 2027</h2>
          <p><strong>PASS</strong> : {course.content.values.pass}<br />
          <strong>PMSS</strong> : {course.content.values.pmss}<br />
          <strong>Augmentation</strong> : {course.content.values.increase}</p>
          {course.content.values.others && <p>{course.content.values.others}</p>}
          <p>Source : {course.content.values.source}</p>
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
          <p>Chaîne : pièces → règle applicable → calcul → bulletin → DSN</p>
          <p><strong>Contrôles prioritaires :</strong></p>
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
        <p>Contenu pédagogique structuré. Validation réglementaire en attente de la publication de l’arrêté définitif 2027.</p>
      </div>

      <a href="/catalogue" className="btn">Retour au catalogue</a>
    </div>
  )
}
