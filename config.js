window.ATLAS_CONFIG = {
  "schemaVersion": "3.0.0",
  "topics": [
    {
      "id": "nuclear",
      "label": "Nucléaire",
      "description": "Positions et propositions relatives à nucléaire.",
      "group": "Production",
      "order": 10,
      "active": true
    },
    {
      "id": "renewables",
      "label": "Renouvelables",
      "description": "Positions et propositions relatives à renouvelables.",
      "group": "Production",
      "order": 20,
      "active": true
    },
    {
      "id": "hydro",
      "label": "Hydraulique",
      "description": "Positions et propositions relatives à hydraulique.",
      "group": "Production",
      "order": 30,
      "active": true
    },
    {
      "id": "geothermal",
      "label": "Géothermie",
      "description": "Positions et propositions relatives à géothermie.",
      "group": "Production",
      "order": 40,
      "active": true
    },
    {
      "id": "sobriety",
      "label": "Sobriété et efficacité",
      "description": "Positions et propositions relatives à sobriété et efficacité.",
      "group": "Demande",
      "order": 50,
      "active": true
    },
    {
      "id": "electrification",
      "label": "Électrification",
      "description": "Positions et propositions relatives à électrification.",
      "group": "Demande",
      "order": 60,
      "active": true
    },
    {
      "id": "public_control",
      "label": "Contrôle public et planification",
      "description": "Positions et propositions relatives à contrôle public et planification.",
      "group": "Gouvernance",
      "order": 70,
      "active": true
    },
    {
      "id": "eu_integration",
      "label": "Intégration européenne",
      "description": "Positions et propositions relatives à intégration européenne.",
      "group": "Gouvernance",
      "order": 80,
      "active": true
    },
    {
      "id": "market",
      "label": "Logique de marché",
      "description": "Positions et propositions relatives à logique de marché.",
      "group": "Gouvernance",
      "order": 90,
      "active": true
    },
    {
      "id": "grid",
      "label": "Réseau électrique",
      "description": "Positions et propositions relatives à réseau électrique.",
      "group": "Système",
      "order": 100,
      "active": true
    },
    {
      "id": "industrial_sovereignty",
      "label": "Souveraineté industrielle",
      "description": "Positions et propositions relatives à souveraineté industrielle.",
      "group": "Industrie",
      "order": 110,
      "active": true
    },
    {
      "id": "price_intervention",
      "label": "Prix et tarification",
      "description": "Positions et propositions relatives à prix et tarification.",
      "group": "Économie",
      "order": 120,
      "active": true
    }
  ],
  "influenceLayers": [
    {
      "id": "decision",
      "label": "Arbitrage politique",
      "description": "Candidat, direction ou instance validant la ligne.",
      "order": 1
    },
    {
      "id": "production",
      "label": "Production programmatique",
      "description": "Responsables et groupes rédigeant ou coordonnant le programme.",
      "order": 2
    },
    {
      "id": "expertise",
      "label": "Expertise et traduction",
      "description": "Experts, parlementaires et spécialistes mobilisés.",
      "order": 3
    },
    {
      "id": "ecosystem",
      "label": "Écosystème d’influence",
      "description": "Réseaux et interlocuteurs externes documentés.",
      "order": 4
    }
  ],
  "relationTypes": [
    {
      "id": "candidate_for",
      "label": "Candidat ou arbitre"
    },
    {
      "id": "writes_program_for",
      "label": "Rédige ou coordonne"
    },
    {
      "id": "technical_expert_for",
      "label": "Expertise technique"
    },
    {
      "id": "influences",
      "label": "Influence rapportée"
    },
    {
      "id": "influence_ecosystem",
      "label": "Écosystème d’influence"
    },
    {
      "id": "coordinates",
      "label": "Coordonne"
    },
    {
      "id": "participates_in",
      "label": "Participe"
    }
  ],
  "evidenceLevels": [
    {
      "id": "confirmed",
      "label": "Établi"
    },
    {
      "id": "reported",
      "label": "Rapporté"
    },
    {
      "id": "inferred",
      "label": "Inféré"
    },
    {
      "id": "unknown",
      "label": "Non établi"
    }
  ],
  "certaintyLevels": [
    {
      "id": "confirmed",
      "label": "Confirmé"
    },
    {
      "id": "reported",
      "label": "Rapporté"
    },
    {
      "id": "inferred",
      "label": "Inféré"
    },
    {
      "id": "probable",
      "label": "Probable"
    },
    {
      "id": "hypothesis",
      "label": "Hypothèse"
    },
    {
      "id": "disputed",
      "label": "Contesté"
    },
    {
      "id": "unknown",
      "label": "Inconnu"
    }
  ],
  "positionStatuses": [
    {
      "id": "documented",
      "label": "Documenté"
    },
    {
      "id": "partial",
      "label": "Partiel"
    },
    {
      "id": "conflicted",
      "label": "Contradictoire"
    },
    {
      "id": "unknown",
      "label": "Non documenté"
    }
  ],
  "focusStatementTypes": [
    {
      "id": "governance",
      "label": "Gouvernance et statut"
    },
    {
      "id": "missions",
      "label": "Missions"
    },
    {
      "id": "planning",
      "label": "Planification et scénarios"
    },
    {
      "id": "investments",
      "label": "Investissements réseau"
    },
    {
      "id": "tariffs",
      "label": "Tarification et financement"
    },
    {
      "id": "interconnections",
      "label": "Interconnexions européennes"
    },
    {
      "id": "operations",
      "label": "Exploitation et sécurité"
    },
    {
      "id": "criticism",
      "label": "Critique explicite"
    }
  ]
};
