export const projects = [
  {
    id: 1,
    name: "L'Hirondelle",
    image: `${process.env.AWS_S3_BUCKET}/lhirondelle_project.png`,
    description: `Refonte complète du site web de L'Hirondelle, un OBNL montréalais d'accueil et d'intégration des immigrants. Prise en charge du projet de A à Z : installation WordPress, personnalisation du thème, gestion de l'hébergement et du domaine, corrections techniques, et formation des membres de l'organisation à la gestion autonome du contenu.`,
    techstack: "WordPress - PHP - JavaScript - CSS - Figma - WPML - ACF - Mailchimp - Hébergement - Gestion de domaine",
    github: null,
    website: "https://hirondelle.qc.ca/",
  },
  {
    id: 2,
    name: "BTH Expert",
    image: `${process.env.AWS_S3_BUCKET}/bthexpert_project.png`,
    description: `Conception et développement du site vitrine de BTH Expert, bureau d'études spécialisé en environnement et ingénierie industrielle en Algérie. Stack moderne avec déploiement continu via Netlify et CMS intégré (Decap CMS) pour permettre au client de mettre à jour son contenu en toute autonomie, sans intervention technique.`,
    techstack: "HTML - CSS - JavaScript - Netlify - Decap CMS",
    github: null,
    website: "https://bthexpert.com/",
  },
];