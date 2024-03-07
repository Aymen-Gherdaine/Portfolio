import Link from "next/link";
import styles from "./postCard.module.css";

const PostCard = ({ blogMetadata }) => {
  const { title, abstract, publishedOn, slug } = blogMetadata;
  return (
    <Link href={`/blogs/${slug}`} className={styles.link_unstyled}>
      <div className={styles.post_card_wrapper}>
        <h3>{title}</h3>
        <p>{abstract}</p>
        <p>Published on: {publishedOn}</p>
      </div>
    </Link>
  );
};

export default PostCard;
