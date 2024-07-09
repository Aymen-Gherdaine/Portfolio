export const projects = [
  {
    id: 1,
    name: "Laghata",
    image: `${process.env.AWS_S3_BUCKET}/laghata_project.jpg`,
    description: `The Laghata app serves as a marketplace connecting individuals eager
    to rent out their equipment for various activities and adventures.
    Whether you're seeking gear for outdoor pursuits or thrilling
    experiences.`,
    techstack: "React - Node - Express - MongoDb - Aws - Framer-motion",
    github: "https://github.com/Aymen-Gherdaine/laghata-marketplace",
    website: "https://laghata.com",
  },
  {
    id: 2,
    name: "Eleganza",
    image: `${process.env.AWS_S3_BUCKET}/Eleganza.jpg`,
    description: `The Eleganza E-Commerece app is a clothing brand. The primary objective is to provide an online platform where customers can browse, select, and purchase clothing items easily and efficiently.`,
    techstack: "NextJs - Wix Headless - Tailwind Css - Stripe - Framer-motion",
    github: "https://github.com/Aymen-Gherdaine/E-Commerce.git",
    website: "https://eleganza-shop.vercel.app",
  },
];
