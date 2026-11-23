export const courses = [
  {
    id: "01",
    slug: "parametres-2027",
    title: "01 — Paramètres 2027",
    level: "Débutant",
    duration: "30 min",
    status: "À valider",
    description: "PASS, PMSS et notions de base. Valeurs 2027 annoncées.",
    content: {
      objectives: [
        "Comprendre ce qu’est le PASS et le PMSS",
        "Connaître les valeurs officielles annoncées pour 2027",
        "Savoir où trouver et vérifier les sources officielles",
        "Identifier les situations de proratisation (entrée/sortie, temps partiel, absences)"
      ],
      values: {
        pass: "48 900 €",
        pmss: "4 075 €",
        increase: "+1,74 %",
        source: "Communiqué du 16/10/2026",
        others: "Trimestriel : 12 225 € • Quinzaine : 2 038 € • Hebdomadaire : 940 € • Journalier : 224 € • Horaire : 30 €"
      },
      warning: "Un arrêté fixant le niveau du plafond sera publié avant la fin de l’année 2026. Ne pas appliquer en production avant confirmation et archivage de l’arrêté. Le chapitre BOSS sera mis à jour au 01/01/2027.",
      notions: "Le PASS (Plafond Annuel de la Sécurité Sociale) est le montant maximal des rémunérations ou gains à prendre en compte pour le calcul de certaines cotisations (principalement l’assurance vieillesse de base). Le PMSS est son équivalent mensuel (PASS / 12).",
      methode: [
        "Toujours distinguer la valeur annuelle (PASS) de la valeur mensuelle (PMSS)",
        "Ne jamais appliquer un simple PASS / 12 sans vérifier les règles de proratisation",
        "Documenter les données d’entrée (période, contrat, statut, CCN, justificatifs)",
        "Contrôler la date de publication de l’arrêté avant toute utilisation"
      ],
      cas: "Une rémunération de 4 500 € dépasse le PMSS annoncé de 425 €. Ne pas en déduire automatiquement une assiette plafonnée de 4 075 € sans vérifier la situation complète (période travaillée, temps partiel, absences, etc.).",
      controles: [
        "Date de publication de l’arrêté",
        "Entrée / sortie en cours de période",
        "Temps partiel",
        "Absences",
        "Cumul de plusieurs contrats ou activités"
      ],
      erreurs: [
        "Appliquer un taux ou un plafond non publié",
        "Confondre absence de publication et maintien automatique du taux de l’année précédente",
        "Oublier la proratisation en cas d’entrée/sortie ou de temps partiel"
      ],
      exercice: "Expliquer le traitement du cas suivant : Une rémunération de 4 500 € dépasse le PMSS annoncé de 425 €. Que faut-il vérifier avant de conclure ?"
    }
  },
  {
    id: "02",
    slug: "cotisations-sociales",
    title: "02 — Cotisations sociales",
    level: "Débutant",
    duration: "45 min",
    status: "À valider",
    description: "Assiettes, taux, cotisations salariales et patronales."
  },
  {
    id: "03",
    slug: "rgdu",
    title: "03 — RGDU",
    level: "Débutant",
    duration: "40 min",
    status: "À valider",
    description: "Réduction générale dégressive unique."
  },
  {
    id: "04",
    slug: "brut-au-net",
    title: "04 — Du brut au net",
    level: "Débutant",
    duration: "35 min",
    status: "À valider",
    description: "Brut, net à payer, net imposable, montant net social."
  },
  {
    id: "05",
    slug: "temps-de-travail",
    title: "05 — Temps de travail",
    level: "Débutant",
    duration: "30 min",
    status: "À valider",
    description: "Heures supplémentaires, complémentaires et temps partiel."
  },
  {
    id: "06",
    slug: "conges-payes",
    title: "06 — Congés payés",
    level: "Débutant",
    duration: "40 min",
    status: "À valider",
    description: "Acquisition, indemnité (dixième / maintien) et report."
  },
  {
    id: "07",
    slug: "fin-de-contrat",
    title: "07 — Fin de contrat / Sortie",
    level: "Débutant",
    duration: "45 min",
    status: "À valider",
    description: "ICCP, documents de sortie, FCTU et DSN."
  }
];

export const news = [
  {
    id: 1,
    category: "BOSS / Paramètres",
    title: "PASS et PMSS 2027",
    date: "16/10/2026",
    excerpt: "Le plafond annuel sera fixé à 48 900 € au 1er janvier 2027 (+1,74 %). Un arrêté sera publié avant fin 2026."
  },
  {
    id: 2,
    category: "DSN",
    title: "Évolutions déclaratives",
    date: "À vérifier",
    excerpt: "Suivi des versions de norme et des calendriers. Distinguer annonces et obligations applicables."
  }
];
