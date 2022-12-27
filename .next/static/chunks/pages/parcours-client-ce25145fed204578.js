(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{4213:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/parcours-client",function(){return i(427)}])},427:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return j}});var n,r=i(5893),t=i(9547),c=i.n(t),a=i(7294),l=i(7209),u=i(769),o=i(4795),d=i(9435);!function(e){e.ADMINISTRATION="Administration",e.EDITOR="Editeur",e.PARTICULIER="Particulier",e.COLLECTIVITE="Collectivit\xe9",e.ENTREPRISE="Entreprise",e.ASSO="Association"}(n||(n={}));var h,p=function(){(0,d.g2)("4. Envoie le formulaire de contact")},v=function(e){var s=e.visitorType,i=e.label,n=(0,a.useRef)(null);return(0,r.jsxs)("form",{id:"contact-form",onSubmit:function(e){if(n&&n.current){var r="[Parcours client][".concat(s,"]"),t=n.current.value;e.preventDefault(),window.location.href=encodeURI("".concat(u.Z.links.mailto.SUPPORT,"?subject=[").concat(i||"Question","] ").concat(r,"&body=").concat(t))}else e.preventDefault()},children:[(0,r.jsx)("label",{htmlFor:"question",children:i||"Quelle est votre question ?"}),(0,r.jsx)("textarea",{id:"description",placeholder:"D\xe9taillez ici votre question",ref:n,required:!0}),(0,r.jsx)("div",{className:"submit layout-center",children:(0,r.jsx)(o.ZP,{type:"submit",size:"large",onClick:p,children:"Envoyer"})})]})};!function(e){e[e.CHERCHE_API=0]="CHERCHE_API",e[e.CHERCHE_API_PART=1]="CHERCHE_API_PART",e[e.FRANCECONNECT_PART=2]="FRANCECONNECT_PART",e[e.FRANCECONNECT_PROBLM_PART=3]="FRANCECONNECT_PROBLM_PART",e[e.FRANCECONNECT_ENTREPRISE=4]="FRANCECONNECT_ENTREPRISE",e[e.NEW_API=5]="NEW_API",e[e.CANT_FIND=6]="CANT_FIND",e[e.CARTE_GRISES=7]="CARTE_GRISES",e[e.TELEPOINT=8]="TELEPOINT",e[e.CONTACT=9]="CONTACT",e[e.DS=10]="DS",e[e.VACCINATION=11]="VACCINATION",e[e.NONE=12]="NONE"}(h||(h={}));var m=[{value:h.CHERCHE_API_PART,label:"Je cherche une API",public:[n.PARTICULIER]},{value:h.CHERCHE_API,label:"Je cherche une API",public:[n.ENTREPRISE,n.ASSO,n.ADMINISTRATION,n.COLLECTIVITE,n.EDITOR]},{value:h.NEW_API,label:"J\u2019ai envie de partager mon API sur api.gouv",public:[n.ADMINISTRATION]},{value:h.CANT_FIND,label:"Je ne trouve pas l\u2019API dont j\u2019ai besoin",public:[n.ENTREPRISE,n.ADMINISTRATION,n.COLLECTIVITE,n.EDITOR,n.ASSO]},{value:h.FRANCECONNECT_PROBLM_PART,label:"J\u2019ai un probl\xe8me avec FranceConnect",public:[n.PARTICULIER]},{value:h.FRANCECONNECT_PART,label:"Je veux me connecter \xe0 FranceConnect",public:[n.PARTICULIER]},{value:h.CARTE_GRISES,label:"Je cherche une API des plaques d\u2019immatriculation, du SIV ou des cartes grises",public:[n.ENTREPRISE]},{value:h.DS,label:"Je cherche d\xe9marches simplifi\xe9es",public:[n.PARTICULIER]},{value:h.FRANCECONNECT_ENTREPRISE,label:"Je veux FranceConnecter mon service",public:[n.ENTREPRISE,n.ASSO]},{value:h.TELEPOINT,label:"Je cherche mon solde de points de permis de conduire",public:[n.PARTICULIER]},{value:h.VACCINATION,label:"Je cherche \xe0 obtenir une attestation de vaccination",public:[n.PARTICULIER]},{value:h.CONTACT,label:"Autre",public:[n.ENTREPRISE,n.ASSO,n.ADMINISTRATION,n.COLLECTIVITE,n.PARTICULIER,n.EDITOR]}],E=function(){(0,d.g2)("4. Clic sur le CTA")},C=function(e){var s=e.subject,i=e.visitorType;switch(s){case h.CHERCHE_API_PART:return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsx)("p",{children:"Ce site internet r\xe9f\xe9rence les API des administrations qui rendent leur donn\xe9es disponibles."}),(0,r.jsxs)("p",{children:["En tant que particulier, vous \xeates libre d\u2019utiliser les"," ",(0,r.jsx)("b",{children:"API ouvertes \xe0 tous"}),". Les API n\xe9cessitant une habilitation sont r\xe9serv\xe9es aux organisations \xe9ligibles (acteurs publics et dans certains cas, entreprises)."]}),(0,r.jsxs)("p",{children:["Toutes nos API sont visibles"," ",(0,r.jsx)("a",{href:"rechercher-api",children:"sur cette page"}),'. Cliquez sur "Uniquement les API ouvertes \xe0 tous" pour n\u2019afficher que les API ouvertes.']}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",href:"/rechercher-api",onClick:E,children:"Rechercher une API"})}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Au fait, connaissez-vous le"," ",(0,r.jsx)("a",{href:"https://data.gouv.fr",children:"portail de nos coll\xe8gues de l\u2019open data ?"})]})]});case h.CHERCHE_API:var t=i===n.ENTREPRISE||i===n.ASSO?"acteur priv\xe9":i===n.EDITOR?"\xe9diteur":"acteur public";return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsxs)("p",{children:["En tant qu'",t,", vous \xeates libre d\u2019utiliser ",(0,r.jsx)("b",{children:"toutes"})," les API ouvertes \xe0 tous et ",(0,r.jsx)("b",{children:"certaines"})," des API n\xe9cessitant une habilitation."]}),(0,r.jsxs)("p",{children:["Toutes nos API sont visibles"," ",(0,r.jsx)("a",{href:"rechercher-api",children:"sur cette page"}),". Si une API vous int\xe9resse, pensez \xe0 v\xe9rifier dans la section ",(0,r.jsx)("b",{children:"Acc\xe8s"})," de la fiche API quelles sont les conditions d'acc\xe8s \xe0 la donn\xe9e."]}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",href:"/rechercher-api",onClick:E,children:"Rechercher une API"})})]});case h.FRANCECONNECT_PROBLM_PART:return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsx)("p",{children:"Si vous rencontrez un probl\xe8me avec FranceConnect, nous vous recommandons de contacter directement l\u2019\xe9quipe via la FAQ de FranceConnect :"}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",href:"https://franceconnect.gouv.fr/faq",onClick:E,children:"Acc\xe9der \xe0 la page d\u2019aide France Connect"})})]});case h.FRANCECONNECT_PART:return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsxs)("p",{children:["Ce site internet ",(0,r.jsx)("b",{children:"ne permet pas"})," de se connecter \xe0 France Connect"]}),(0,r.jsxs)("p",{children:["Vous trouverez plus d\u2019explications sur"," ",(0,r.jsx)("a",{href:"https://franceconnect.gouv.fr",children:"le site de FranceConnect"}),". En particulier, nous vous recommandons de consulter la FAQ France Connect :"]}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",href:"https://franceconnect.gouv.fr/faq",onClick:E,children:"Acc\xe9der \xe0 la page d\u2019aide France Connect"})})]});case h.FRANCECONNECT_ENTREPRISE:return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsx)("p",{children:"Conform\xe9ment \xe0 l'arr\xeat\xe9 du 8 novembre 2018 relatif \xe0 FranceConnect , les entreprises ou associations peuvent \xeatre \xe9ligibles dans les cas suivant:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"les personnes morales mentionn\xe9es au II et au III de l'article 1er de l'ordonnance du 28 avril 2005 qui proposent des services en ligne li\xe9s \xe0 la d\xe9marche de changement d'adresse et uniquement pour ces services"}),(0,r.jsx)("li",{children:"les personnes morales de droit priv\xe9 qui proposent des services en ligne dont l'usage n\xe9cessite, conform\xe9ment \xe0 des dispositions l\xe9gislatives ou r\xe8glementaires, la v\xe9rification de l'identit\xe9 de leurs utilisateurs ou de celle de certains de leurs attributs et uniquement pour les services qui n\xe9cessitent cette v\xe9rification"})]}),(0,r.jsx)("p",{children:"Si vous avez v\xe9rifi\xe9 que vous \xeates \xe9lligible, vous pouvez remplir la demande :"}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",onClick:E,href:"https://datapass.api.gouv.fr/franceconnect?source=api_gouv_customer_path_entreprise",children:"Remplir une demande"})})]});case h.CARTE_GRISES:return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsx)("p",{children:"\xc0 notre connaissance, il n\u2019existe pas d\u2019API qui r\xe9f\xe9rence les cartes grises ou les immatriculations de v\xe9hicules."}),(0,r.jsx)("p",{children:"Pour plus d\u2019informations vous pouvez contacter le site internet du minist\xe8re de l\u2019int\xe9rieur :"}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",href:"https://immatriculation.ants.gouv.fr",onClick:E,children:"Consulter le site de l\u2019ANTS"})})]});case h.DS:return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsxs)("p",{children:["Ce site ne permet pas de faire une d\xe9marche sur"," ",(0,r.jsx)("a",{href:"https://demarches-simplifiees.fr",children:"d\xe9marches-simplifi\xe9es."})]}),(0,r.jsx)("p",{children:"Cliquez sur les liens ci-dessous pour :"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://doc.demarches-simplifiees.fr/listes-des-demarches/demarches-relatives-aux-medailles-dhonneur",children:"Faire une demande de m\xe9daille d'honneur"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://doc.demarches-simplifiees.fr/listes-des-demarches/demarches-relatives-aux-titres-de-sejour-pour-les-etrangers",children:"Faire une demande de titre de s\xe9jour"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://doc.demarches-simplifiees.fr/listes-des-demarches/demarches-relatives-au-permis-de-conduire",children:"Faire une demande de num\xe9ro NEPH"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://doc.demarches-simplifiees.fr/listes-des-demarches/demarches-relative-a-linscription-au-service-de-restauration",children:"Faire une demande d'inscription scolaire"})})]}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",href:"https://demarches-simplifiees.fr",onClick:E,children:"Consultez le site d\xe9marches-simplifi\xe9es"})})]});case h.TELEPOINT:return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsxs)("p",{children:["Ce site internet ",(0,r.jsx)("b",{children:"ne permet pas"})," d\u2019obtenir son d\xe9compte de points de permis de conduire."]}),(0,r.jsxs)("p",{children:["Le service que vous recherchez s\u2019appelle ",(0,r.jsx)("b",{children:"t\xe9l\xe9points"})," et il est accessible \xe0 tous :"]}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",onClick:E,href:"https://permisdeconduire.ants.gouv.fr/Vos-demarches/Le-permis-a-points/Solde-de-vos-points-via-une-identite-France-Connect",children:"Acc\xe9der au site t\xe9l\xe9point"})})]});case h.VACCINATION:return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsxs)("p",{children:["Ce site internet ",(0,r.jsx)("b",{children:"ne permet pas"})," d\u2019obtenir une attestation de vaccination contre la covid-19."]}),(0,r.jsx)("p",{children:"Le service que vous recherchez est propos\xe9 par l'assurance sant\xe9 et il est accessible \xe0 tous\xa0:"}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",onClick:E,href:"https://attestation-vaccin.ameli.fr/",children:"Acc\xe9der au site attestation-vaccination"})})]});case h.NEW_API:return(0,r.jsxs)("div",{className:"subject-answer",children:[(0,r.jsx)("p",{children:"Vous \xeates une administration et vous souhaiter exposer une API dans le catalogue api.gouv ? Vous \xeates au bon endroit !"}),(0,r.jsx)("p",{children:"La demande d\u2019ajout de nouvelle API se fait en autonomie via GitHub. Votre demande sera trait\xe9e d\xe8s que possible, et nous vous aiderons \xe0 l'am\xe9liorer le cas \xe9ch\xe9ant"}),(0,r.jsx)("div",{className:"layout-center",children:(0,r.jsx)(o.ZP,{size:"large",onClick:E,href:"https://github.com/betagouv/api.gouv.fr/blob/master/CONTRIBUTING.md",children:"Ajouter une nouvelle API"})})]});case h.CANT_FIND:return(0,r.jsx)(v,{label:"Demande de nouvelle API",visitorType:i});default:return(0,r.jsx)(v,{visitorType:i})}},I=function(e){var s=e.visitor,i=(0,a.useState)(null),n=i[0],t=i[1],c=m.reduce((function(e,i){return i.public.indexOf(s)>-1&&e.push(i),e}),[]);return(0,a.useEffect)((function(){t(null)}),[s]),(0,a.useEffect)((function(){null!==n&&(0,d.g2)("3. Renseigne un sujet de question",h[n])}),[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"contact-form-question",children:[(0,r.jsx)("div",{className:"question",children:"Comment pouvons-nous vous aider ? "}),(0,r.jsx)(o.nb,{onClick:t,multiChoiceOptions:c,selected:n})]}),null!==n&&(0,r.jsx)(C,{subject:n,visitorType:s})]})},N=i(9213),j=function(){var e=(0,a.useState)(null),s=e[0],i=e[1],t=[{value:n.PARTICULIER,label:"un particulier"},{value:n.ADMINISTRATION,label:"une administration"},{value:n.COLLECTIVITE,label:"une collectivit\xe9"},{value:n.EDITOR,label:"un \xe9diteur pour une collectivit\xe9"},{value:n.ENTREPRISE,label:"une entreprise"},{value:n.ASSO,label:"une association"}];return(0,a.useEffect)((function(){(0,d.g2)("1. Commence le parcours client")}),[]),(0,a.useEffect)((function(){null!==s&&(0,d.g2)("2. Renseigne un statut de visiteur",s)}),[s]),(0,r.jsxs)(l.Z,{title:"Formulaire de contact",usePreFooter:!1,useFooter:!1,noIndex:!0,children:[(0,r.jsxs)("div",{className:"jsx-ddabda856125fd4e text-wrapper text-style",children:[(0,r.jsxs)("h1",{className:"jsx-ddabda856125fd4e",children:["Bonjour\xa0",(0,r.jsx)(N.Z,{emoji:"\ud83d\udc4b",label:"Geste de la main"}),", comment pouvons-nous vous aider\xa0?"]}),(0,r.jsx)("p",{className:"jsx-ddabda856125fd4e",children:"Pour commencer, nous aimerions faire connaissance :"}),(0,r.jsxs)("div",{className:"jsx-ddabda856125fd4e contact-form-question",children:[(0,r.jsx)("div",{className:"jsx-ddabda856125fd4e question",children:"Qui \xeates-vous ?"}),(0,r.jsx)(o.nb,{selected:s,onClick:i,multiChoiceOptions:t})]}),s&&(0,r.jsx)(I,{visitor:s})]}),(0,r.jsx)(c(),{id:"ddabda856125fd4e",children:".contact-form-question{margin:20px 0 0}.contact-form-question>div.question{font-weight:bold}"})]})}}},function(e){e.O(0,[662,645,209,774,888,179],(function(){return s=4213,e(e.s=s);var s}));var s=e.O();_N_E=s}]);