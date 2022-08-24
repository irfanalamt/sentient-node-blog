import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';
import Grid from '@mui/material/Unstable_Grid2';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(/images/walls/1.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30vh',
          padding: 1,
        }}
      >
        <Typography
          sx={{ color: 'white', mt: 2, mx: 2, fontSize: '2rem' }}
          align='left'
          variant='h5'
        >
          {`I'm Irfan. Welcome to my blog!`}
        </Typography>
        <Typography
          sx={{ mx: 2, color: 'white', fontSize: '1.2rem' }}
          variant='subtitle1'
          align='left'
        >
          Here I inscribe things that bring me awe.
        </Typography>
        <Typography
          sx={{ mx: 2, color: 'white', fontSize: '1rem' }}
          variant='body1'
          align='left'
        >
          {`#PassionatelyCurious`}
        </Typography>
      </Paper>
      <Grid sx={{ justifyContent: 'center' }} container>
        {posts.map((post, i) => {
          return (
            <Grid key={i} sm={12} md={3}>
              <Post key={i} post={post} />
            </Grid>
          );
        })}
      </Grid>
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
