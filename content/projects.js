export const projects = [
  {
    id: 1,
    name: "L'Hirondelle",
    image: `${process.env.AWS_S3_BUCKET}/lhirondelle_project.png`,
    description: `Full redesign and migration of a Montreal nonprofit's website. Built with Bricks Builder on WordPress, with a fully restructured backend using ACF so the client could manage everything without touching code. Configured a multilingual setup across 4–5 languages with WPML, built an event and activity management system, integrated an appointment booking flow, and wired up PayPal for donation payments. Handled DNS configuration, performance optimization, caching, and wrote detailed documentation for the team.`,
    techstack: "WordPress · Bricks Builder · PHP · ACF · WPML · JavaScript · CSS · Mailchimp · PayPal · DNS",
    github: null,
    website: "https://hirondelle.qc.ca/",
  },
  {
    id: 2,
    name: "BTH Expert",
    image: `${process.env.AWS_S3_BUCKET}/bthexpert_project.png`,
    description: `Designed and built a modern showcase website for an Algerian environmental engineering firm. The client needed something clean and fast — no heavy CMS, no maintenance overhead. Went with a static stack deployed on Netlify with Decap CMS as the backend, giving the client full control over every text, image, project, and sector entry through a simple admin interface. Set up DNS, configured transactional email, and optimized the contact form flow end to end.`,
    techstack: "HTML · CSS · JavaScript · Netlify · Decap CMS · DNS",
    github: null,
    website: "https://bthexpert.com/",
  },
];