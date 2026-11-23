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
      pourquoi: "Le PASS (Plafond Annuel de la Sécurité Sociale) et le PMSS (Plafond Mensuel) existent pour limiter l’assiette de certaines cotisations sociales, principalement les cotisations d’assurance vieillesse de base. Ils servent aussi de référence pour d’autres calculs (certaines contributions, droits sociaux, etc.).",
      pourquoiChange: "Le montant change chaque année parce qu’il est revalorisé en fonction de l’évolution du salaire moyen par tête (SMPT), conformément à l’article D. 242-17 du code de la sécurité sociale. L’objectif est d’adapter le plafond à l’évolution des salaires. Pour 2027, l’augmentation annoncée est de +1,74 %.",
      roleBulletin: "Le PASS/PMSS n’apparaît généralement pas comme une ligne isolée sur le bulletin. Il influence directement le calcul des cotisations plafonnées (ex. : vieillesse plafonnée). C’est lui qui détermine la partie de la rémunération soumise ou non à certaines cotisations.",
      apparition: "Sur le bulletin, son effet se voit dans les lignes de cotisations (assiette plafonnée vs déplafonnée). Il est aussi utilisé pour les proratisations en cas d’entrée/sortie, temps partiel ou absences.",
      modesCalcul: [
        {
          titre: "Mois complet (cas standard)",
          detail: "On applique le PMSS du mois (4 075 € pour 2027 annoncé) comme plafond mensuel pour les cotisations concernées."
        },
        {
          titre: "Entrée ou sortie en cours de mois",
          detail: "Le plafond est proratisé en fonction du nombre de jours travaillés (ou selon les règles du logiciel / de la CCN). Il ne faut jamais appliquer le PMSS plein si la période n’est pas complète."
        },
        {
          titre: "Temps partiel",
          detail: "Le plafond est réduit proportionnellement à la durée du travail par rapport à un temps plein. Un salarié à 50 % n’a pas le même PMSS de référence qu’un temps plein."
        },
        {
          titre: "Absences",
          detail: "Selon la nature de l’absence (maladie, congés, etc.), le plafond peut être proratisé ou non. Il faut toujours vérifier la règle applicable et la documentation du logiciel."
        },
        {
          titre: "Plusieurs contrats ou cumuls",
          detail: "Les plafonds se cumulent dans la limite du PASS annuel. Il faut reconstituer la situation globale du salarié."
        }
      ],
      objectifs: [
        "Comprendre pourquoi le PASS et le PMSS existent",
        "Savoir pourquoi et comment ils évoluent chaque année",
        "Identifier leur rôle concret sur le bulletin de paie",
        "Maîtriser les différents modes de calcul selon la situation (contrat, présence, absences, temps partiel)"
      ],
      values: {
        pass: "48 900 €",
        pmss: "4 075 €",
        increase: "+1,74 %",
        source: "Communiqué du 16/10/2026",
        others: "Trimestriel : 12 225 € • Quinzaine : 2 038 € • Hebdomadaire : 940 € • Journalier : 224 € • Horaire : 30 €"
      },
      warning: "Un arrêté fixant le niveau du plafond sera publié avant la fin de l’année 2026. Ne pas appliquer en production avant confirmation et archivage de l’arrêté. Le chapitre BOSS sera mis à jour au 01/01/2027.",
      cas: "Une rémunération de 4 500 € dépasse le PMSS annoncé de 425 €. Avant de conclure sur l’assiette plafonnée, il faut vérifier : la période exacte travaillée, le temps de travail contractuel, les absences éventuelles et s’il y a d’autres contrats.",
      controles: [
        "Date de publication de l’arrêté",
        "Période exacte (entrée/sortie)",
        "Durée du travail (temps plein / partiel)",
        "Nature et durée des absences",
        "Cumul éventuel avec d’autres contrats"
      ],
      erreurs: [
        "Appliquer le PMSS plein sans proratisation",
        "Utiliser un plafond non confirmé par arrêté",
        "Oublier l’impact du temps partiel ou des absences"
      ],
      exercice: "Un salarié entre le 15 du mois, travaille à 80 % et a 2 jours d’absence. Explique comment tu détermines le plafond à appliquer pour les cotisations plafonnées."
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
