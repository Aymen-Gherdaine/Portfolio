import fs from "fs";
import matter from "gray-matter";

function getPostMetadata(basePath) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  // get post metadata from the markdown file
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf-8");

    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      abstract: matterResult.data.abstract,
      publishedOn: matterResult.data.publishedOn,
      slug: filename.replace(".mdx", ""),
    };
  });

  return posts;
}

export default getPostMetadata;
