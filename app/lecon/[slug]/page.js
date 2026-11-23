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

      {course.content?.values && (
        <div className="section">
          <h2>Valeurs officielles annoncées 2027</h2>
          <p><strong>PASS</strong> : {course.content.values.pass}<br />
          <strong>PMSS</strong> : {course.content.values.pmss}<br />
          <strong>Augmentation</strong> : {course.content.values.increase}</p>
          <p>Source : {course.content.values.source}</p>
        </div>
      )}

      {course.content?.objectives && (
        <div className="section">
          <h2>Objectifs</h2>
          <ul>
            {course.content.objectives.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </div>
      )}

      <div className="section">
        <h2>Contenu de la leçon</h2>
        <p>Le contenu détaillé (méthode, cas pratiques, exercices, quiz) sera intégré ici au fur et à mesure de la validation.</p>
        <p>Pour le Module 01, les valeurs PASS/PMSS 2027 du communiqué du 16/10/2026 sont déjà intégrées.</p>
      </div>

      <a href="/catalogue" className="btn">Retour au catalogue</a>
    </div>
  )
}
