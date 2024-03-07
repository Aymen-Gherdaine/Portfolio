import styles from "./blogs.module.css";
import getPostMetadata from "@/utils/getPostMetadata";
import PostCard from "@/components/PostCard/PostCard";

const Blogs = () => {
  const postMetadata = getPostMetadata("content/posts");

  return (
    <div className={styles.wrapper}>
      {postMetadata.map((blogMetadata) => {
        return <PostCard blogMetadata={blogMetadata} key={blogMetadata.slug} />;
      })}
    </div>
  );
};

export default Blogs;
