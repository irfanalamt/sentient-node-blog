import Link from 'next/link';
import Image from 'next/image';

const Post = ({ post }) => {
  return (
    <>
      <Image
        src={post.frontMatter.cover_image}
        alt=''
        width={100}
        height={100}
      />
      <h3>{post.frontMatter.title}</h3>
      <p>{post.frontMatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a>Read more</a>
      </Link>
    </>
  );
};

export default Post;
