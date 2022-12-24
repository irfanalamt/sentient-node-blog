import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { useEffect } from 'react';
import Post from '../components/Post';

import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

export default function Home({ posts }) {
  useEffect(() => {
    handleScrollPosition();
  }, []);

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
      <Box
        sx={{
          height: 'max-content-height',
          padding: 1,
          position: 'relative',
          backgroundColor: '#F3F3F0',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [-2, 2, 0] }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Typography
            sx={{ color: '#2A2731', mt: 2, mx: 2 }}
            align='left'
            variant='h5'
          >
            {`I'm Irfan. Welcome to my blog!`}
          </Typography>
        </motion.div>
        <Typography
          sx={{ mx: 2, color: '#2A2731', fontSize: '0.85rem' }}
          variant='subtitle1'
          align='left'
        >
          Here, I share the things that bring me awe.
        </Typography>
        <Box sx={{ mx: 2, my: 1, display: 'flex', gap: 1.1 }}>
          <Avatar
            sx={{ boxShadow: 1, bgcolor: '#E69D25', height: 30, width: 30 }}
          >
            <ScienceOutlinedIcon sx={{ color: '#2A2731', fontSize: 18 }} />
          </Avatar>

          <Avatar
            sx={{
              boxShadow: 1,
              bgcolor: '#E69D25',
              height: 30,
              width: 30,
            }}
          >
            <PsychologyAltIcon
              sx={{
                color: '#2A2731',
                fontSize: 18,
              }}
            />
          </Avatar>
          <Avatar
            sx={{ boxShadow: 1, bgcolor: '#E69D25', height: 30, width: 30 }}
          >
            <Diversity1OutlinedIcon sx={{ color: '#2A2731', fontSize: 18 }} />
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
              backgroundColor: '#F3EBDD',
              color: '#2A2922',
              boxShadow: 1,
              borderRadius: 5,
              fontSize: 18,
            }}
          />
        </motion.div>
      </Box>
      <Grid sx={{ justifyContent: 'center', bgcolor: '#F3F3F0' }} container>
        {posts.map((post, i) => (
          <Grid key={i} sm={12} md={5} lg={4}>
            <Post handleClick={handleClick} key={i} post={post} />
          </Grid>
        ))}
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
