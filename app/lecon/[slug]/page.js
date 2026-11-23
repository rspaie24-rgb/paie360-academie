'use client'
import { useState } from 'react'
import { courses } from '../../../data/content'
import { notFound } from 'next/navigation'

const schemaSteps = [
  {
    id: 'pieces',
    label: 'Pièces',
    sub: 'Contrat, période',
    explication: 'On part des éléments concrets du salarié : contrat de travail, date d’entrée/sortie, temps de travail contractuel, absences du mois, justificatifs.',
    situations: ['Entrée le 15 du mois', 'Temps partiel 80 %', '2 jours d’absence non rémunérée', 'Mois complet temps plein']
  },
  {
    id: 'regle',
    label: 'Règle',
    sub: 'PASS / PMSS',
    explication: 'On applique le plafond de la sécurité sociale en vigueur (PMSS annoncé 4 075 € pour 2027). C’est la base de référence avant tout ajustement.',
    situations: ['PMSS plein si mois complet', 'Vérification de la date de l’arrêté', 'Distinction PASS annuel / PMSS mensuel']
  },
  {
    id: 'prorata',
    label: 'Prorata',
    sub: 'Selon situation',
    explication: 'Le plafond est ajusté selon la situation réelle : entrée/sortie, temps partiel, absences non rémunérées. On applique les formules de proratisation.',
    situations: ['Prorata calendaire (entrée/sortie)', 'Coefficient temps partiel', 'Réduction pour absence non rémunérée', 'Combinaison de plusieurs coefficients']
  },
  {
    id: 'assiette',
    label: 'Assiette',
    sub: 'Plafonnée',
    explication: 'On obtient le plafond applicable du mois. C’est ce montant qui limite l’assiette des cotisations plafonnées (ex. vieillesse plafonnée).',
    situations: ['Assiette limitée au plafond proratisé', 'Partie au-delà non soumise aux cotisations plafonnées', 'Comparaison avec le brut du mois']
  },
  {
    id: 'bulletin',
    label: 'Bulletin',
    sub: 'Cotisations',
    explication: 'Le résultat apparaît sur le bulletin dans les lignes de cotisations (assiette plafonnée vs déplafonnée). C’est l’étape finale visible pour le salarié et le contrôle.',
    situations: ['Ligne vieillesse plafonnée', 'Différence plafonné / déplafonné', 'Contrôle de cohérence avec la situation']
  }
]

export default function Lecon({ params }) {
  const course = courses.find(c => c.slug === params.slug)
  if (!course) notFound()

  const [activeStep, setActiveStep] = useState(null)

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
        <h2>Schéma de la chaîne de calcul <span style={{fontSize:'14px', color:'var(--gold)'}}>(clique sur une étape)</span></h2>
        <div className="schema">
          {schemaSteps.map((step) => (
            <div
              key={step.id}
              className="schema-step"
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              style={{
                cursor: 'pointer',
                background: activeStep === step.id ? 'var(--gold)' : 'var(--navy)',
                color: activeStep === step.id ? 'var(--navy)' : '#fff',
                transform: activeStep === step.id ? 'scale(1.05)' : 'none'
              }}
            >
              {step.label}<br/>
              <span className="muted-small" style={{color: activeStep === step.id ? 'var(--navy)' : '#dce5f1'}}>{step.sub}</span>
            </div>
          ))}
        </div>

        {activeStep && (
          <div className="visual-box" style={{marginTop:'20px', textAlign:'left'}}>
            {schemaSteps.filter(s => s.id === activeStep).map(s => (
              <div key={s.id}>
                <strong>{s.label}</strong>
                <p>{s.explication}</p>
                <p><strong>Situations typiques :</strong></p>
                <ul>
                  {s.situations.map((sit, i) => <li key={i}>{sit}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}
        <p className="muted-small" style={{textAlign:'center', marginTop:'12px'}}>Clique sur une étape pour voir l’explication et les situations</p>
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
        <p>Contenu pédagogique structuré avec schémas interactifs et formules. Validation réglementaire en attente de la publication de l’arrêté définitif 2027.</p>
      </div>

      <a href="/catalogue" className="btn">Retour au catalogue</a>
    </div>
  )
}
