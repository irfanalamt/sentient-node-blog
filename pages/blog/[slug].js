import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

const PostPage = ({ frontMatter: { title, cover_image }, slug, content }) => {
  const parsedContent = marked.parse(content);
  return (
    <>
      <h1>You clicked a post</h1>
      <h3>{title}</h3>
      <div name='post-body'>
        <div dangerouslySetInnerHTML={{ __html: parsedContent }}></div>
      </div>
      <Link href='/'>Go back</Link>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => {
    return { params: { slug: filename.replace('.md', '') } };
  });
  console.log('🚀 ~ paths ~ paths', paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  console.log('🚀 ~ getStaticProps ~ slug', slug);
  const markdownWithFrontMatter = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithFrontMatter);

  return { props: { frontMatter, slug, content } };
}

export default PostPage;
