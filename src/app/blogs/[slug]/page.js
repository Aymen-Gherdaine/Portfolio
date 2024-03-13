import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./blogPost.module.css";
import getPostMetadata from "@/utils/getPostMetadata";

// function that return the blog post content
function getPostContent(slug) {
  const folder = "content/posts/";
  const file = folder + `${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);

  return matterResult;
}

// function that generate static slug for each blog post during the building time
export const generateStaticParams = async () => {
  const posts = getPostMetadata("content/posts/");

  return posts.map((post) => ({ slug: post.slug }));
};

// generate metadata for each blog post
export async function generateMetadata({ params }) {
  const id = params?.slug ? " . " + params?.slug : "";

  return {
    title: `Aymen Gherdaine ${id.replaceAll("-", " ")}`,
  };
}

const blogPostPage = ({ params }) => {
  const postContent = getPostContent(params.slug);

  return (
    <article className={styles.article_wrapper}>
      <MDXRemote source={postContent.content} />
    </article>
  );
};

export default blogPostPage;
