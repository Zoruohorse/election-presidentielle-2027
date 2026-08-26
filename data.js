window.ATLAS_DATA={
meta:{title:"Atlas documentaire",schemaVersion:"2.0.0",updatedAt:"2026-08-26",targetInstitutionLabel:"Institution cible"},
organizations:[{id:"org_demo",name:"Organisation de démonstration",shortName:"Organisation",description:"Entrée synthétique à remplacer par votre corpus.",active:true}],
entities:[
{id:"entity_demo_1",name:"Équipe de coordination",type:"collective",description:"Entité synthétique de démonstration."},
{id:"entity_demo_2",name:"Groupe d’expertise",type:"think_tank",description:"Entité synthétique de démonstration."}
],
relations:[
{id:"rel_demo_1",fromId:"entity_demo_1",toId:"org_demo",relationType:"coordinates",roleLabel:"Coordination documentaire",influenceLayer:"production",topicIds:["theme_a","theme_b"],evidenceLevel:"confirmed",certainty:"confirmed",sourceIds:["source_demo_1"],validFrom:"2026-01-01",validTo:null,reviewStatus:"validated"},
{id:"rel_demo_2",fromId:"entity_demo_2",toId:"org_demo",relationType:"advises",roleLabel:"Contribution spécialisée",influenceLayer:"expertise",topicIds:["theme_b"],evidenceLevel:"reported",certainty:"reported",sourceIds:["source_demo_1"],validFrom:null,validTo:null,reviewStatus:"to_review"}
],
positions:[
{id:"position_demo_a",holderId:"org_demo",topicId:"theme_a",summary:"Synthèse documentaire de démonstration liée à une affirmation précise.",status:"documented",certainty:"confirmed",claimIds:["claim_demo_1"],validFrom:null,validTo:null,updatedAt:"2026-08-26"},
{id:"position_demo_b",holderId:"org_demo",topicId:"theme_b",summary:"État documentaire partiel. Cette formulation doit être remplacée par une synthèse issue du corpus.",status:"partial",certainty:"reported",claimIds:["claim_demo_2"],validFrom:null,validTo:null,updatedAt:"2026-08-26"},
{id:"position_demo_c",holderId:"org_demo",topicId:"theme_c",summary:"Aucune position suffisamment documentée dans cet exemple.",status:"unknown",certainty:"unknown",claimIds:[],validFrom:null,validTo:null,updatedAt:"2026-08-26"}
],
claims:[
{id:"claim_demo_1",subjectId:"org_demo",speakerId:null,claimType:"documented_position",topicIds:["theme_a"],statement:"Affirmation synthétique de démonstration.",quote:null,sourceIds:["source_demo_1"],sourceLocator:{page:null,section:"Section de démonstration",timestamp:null,fragment:null},statementDate:"2026-08-01",evidenceLevel:"confirmed",certainty:"confirmed",reviewStatus:"validated"},
{id:"claim_demo_2",subjectId:"org_demo",speakerId:null,claimType:"documented_position",topicIds:["theme_b"],statement:"Deuxième affirmation synthétique, encore soumise à revue.",quote:null,sourceIds:["source_demo_1"],sourceLocator:{page:null,section:null,timestamp:null,fragment:null},statementDate:"2026-08-02",evidenceLevel:"reported",certainty:"reported",reviewStatus:"to_review"}
],
focusMentions:[
{id:"focus_demo_1",organizationId:"org_demo",speakerId:null,statementType:"planning",topicIds:["theme_a"],statement:"Déclaration synthétique de démonstration visant directement l’institution cible.",targetInstitutionId:"institution_target",explicitness:"explicit",statementDate:"2026-08-03",sourceIds:["source_demo_1"],sourceLocator:{page:null,section:"Focus",timestamp:null},certainty:"confirmed",reviewStatus:"validated",updatedAt:"2026-08-26"}
],
sources:[{id:"source_demo_1",title:"Source synthétique de démonstration",publisher:"Exemple",type:"Document",url:null,publishedAt:"2026-08-01",reliability:"demo",accessedAt:"2026-08-26",notes:"À remplacer. Aucune donnée réelle n’est fournie dans ce modèle."}]
};