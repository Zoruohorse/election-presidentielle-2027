window.ATLAS_CONFIG={
schemaVersion:"2.0.0",
topics:[
{id:"theme_a",label:"Thème A",description:"Description configurable du premier thème.",group:"groupe_1",order:10,active:true},
{id:"theme_b",label:"Thème B",description:"Description configurable du deuxième thème.",group:"groupe_1",order:20,active:true},
{id:"theme_c",label:"Thème C",description:"Description configurable du troisième thème.",group:"groupe_2",order:30,active:true}
],
influenceLayers:[
{id:"decision",label:"Arbitrage",description:"Entités qui valident ou orientent la ligne.",order:1},
{id:"production",label:"Production",description:"Entités qui coordonnent ou rédigent.",order:2},
{id:"expertise",label:"Expertise",description:"Entités qui apportent une expertise spécialisée.",order:3},
{id:"ecosystem",label:"Écosystème",description:"Interlocuteurs et réseaux externes documentés.",order:4}
],
entityTypes:[{id:"person",label:"Personne"},{id:"organization",label:"Organisation"},{id:"institution",label:"Institution"},{id:"collective",label:"Collectif"},{id:"think_tank",label:"Centre de réflexion"}],
relationTypes:[{id:"leads",label:"Dirige"},{id:"coordinates",label:"Coordonne"},{id:"contributes",label:"Contribue"},{id:"advises",label:"Conseille"},{id:"interacts",label:"Échange avec"}],
evidenceLevels:[{id:"confirmed",label:"Établi"},{id:"reported",label:"Rapporté"},{id:"inferred",label:"Inféré"},{id:"unknown",label:"Non établi"}],
certaintyLevels:[{id:"confirmed",label:"Confirmé"},{id:"reported",label:"Rapporté"},{id:"disputed",label:"Contesté"},{id:"unknown",label:"Inconnu"}],
positionStatuses:[{id:"documented",label:"Documenté"},{id:"partial",label:"Partiel"},{id:"conflicted",label:"Contradictoire"},{id:"unknown",label:"Non documenté"}],
focusStatementTypes:[{id:"governance",label:"Gouvernance"},{id:"missions",label:"Missions"},{id:"planning",label:"Planification"},{id:"investments",label:"Investissements"},{id:"operations",label:"Exploitation"},{id:"criticism",label:"Critique explicite"}],
reviewStatuses:[{id:"validated",label:"Validé"},{id:"to_review",label:"À revoir"},{id:"archived",label:"Archivé"}]
};