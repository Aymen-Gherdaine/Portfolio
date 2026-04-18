const profile = {
  about_me_title: `Hey, I'm Aymen`,
  image: `${process.env.AWS_S3_BUCKET}/profile.png`,
  about_me_paragraph: `I got into development through e-commerce — building Shopify stores got me hooked on the craft of creating things on the web. 
  That curiosity pushed me toward a full-stack bootcamp at Concordia, backed by a Master's in Network & Systems Administration. 
  I build complete web solutions: from architecture and backend logic to UI and deployment. 
  I care about shipping things that actually work — for users and for the people who have to maintain them.`,
  resume_href: `${process.env.AWS_S3_BUCKET}/AYMEN GHERDAINE - CV.pdf`,
  resume_file_download: `${process.env.AWS_S3_BUCKET}/AYMEN GHERDAINE - CV.pdf`,
};
 
export default profile;