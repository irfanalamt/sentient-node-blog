import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';

import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';

export default function Home({ posts }) {
  useEffect(() => {
    handleScrollPosition();
  }, []);

  console.log(posts);
  function handleClick() {
    sessionStorage.setItem('scrollPosition', window.pageYOffset);
  }

  // handle scroll position after content load
  function handleScrollPosition() {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem('scrollPosition');
    }
  }
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(/images/walls/1.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 'max-content-height',
          padding: 1,
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [-2, 2, 0] }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Typography
            sx={{ color: 'white', mt: 2, mx: 2, fontSize: '2rem' }}
            align='left'
            variant='h5'
          >
            {`I'm Irfan. Welcome to my blog!`}
          </Typography>
        </motion.div>
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
        <Box sx={{ mx: 2, my: 1, display: 'flex', gap: 1.1 }}>
          <Avatar sx={{ bgcolor: '#673ab7', boxShadow: 1 }}>
            <ScienceOutlinedIcon
              sx={{
                fontSize: '1.5rem',
              }}
            />
          </Avatar>

          <Avatar sx={{ bgcolor: '#e91e63', boxShadow: 1 }}>
            <PsychologyAltIcon
              sx={{
                fontSize: '1.5rem',
              }}
            />
          </Avatar>
          <Avatar sx={{ bgcolor: '#cddc39', boxShadow: 1 }}>
            <Diversity1OutlinedIcon
              sx={{
                fontSize: '1.5rem',
              }}
            />
          </Avatar>
        </Box>
        <motion.div
          animate={{
            opacity: [0, 1, 0, 1, 0],
            transition: {
              repeat: 1,
              delay: 3,
              duration: 0.8,
              repeatDelay: 1.2,
            },
          }}
        >
          <Face6RoundedIcon
            sx={{
              position: 'absolute',
              right: 10,
              bottom: 10,
              color: 'black',
              backgroundColor: 'white',
              boxShadow: 1,
              borderRadius: 5,
              fontSize: 18,
            }}
          />
        </motion.div>
      </Paper>
      <Grid sx={{ justifyContent: 'center' }} container>
        {posts.map((post, i) => {
          return (
            <Grid key={i} sm={12} md={5} lg={4}>
              <Post handleClick={handleClick} key={i} post={post} />
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
    props: {
      posts: posts.sort((a, b) => {
        return b.frontMatter.id - a.frontMatter.id;
      }),
    },
  };
}
