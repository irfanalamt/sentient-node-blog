import { Button, Container } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Button color='secondary' variant='contained'>
        hello
      </Button>
      <Container sx={{ display: 'flex' }}>
        {posts.map((post, i) => {
          return <Post key={i} post={post} />;
        })}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  // Get files from posts directory
  const files = fs.readdirSync(path.join('posts'));
  console.log(files);

  // Get slug and front matter from posts
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithFrontMatter = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontMatter } = matter(markdownWithFrontMatter);

    return { slug, frontMatter };
  });

  return {
    props: { posts: posts },
  };
}
