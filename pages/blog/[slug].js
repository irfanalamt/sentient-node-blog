import BlurOnIcon from '@mui/icons-material/BlurOn';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CookieIcon from '@mui/icons-material/Cookie';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {
  Alert,
  Box,
  Button,
  Container,
  Fab,
  Snackbar,
  Typography,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import path from 'path';
import { useState } from 'react';

const PostPage = ({ frontMatter: { title }, content }) => {
  const [ifLiked, setIfLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState('');
  const parsedContent = marked.parse(content);
  const [transition, setTransition] = useState(undefined);

  const handleClose = () => setOpen(false);

  const toastContent = [
    'YOU are awesome.',
    'Give me back my unicorn.',
    'Sisyphus is happy.',
    'Love you tooo.',
    'haha.',
    'wingardium leviosa.',
    'love received.',
  ];

  const generateRandomToast = () => {
    const randomNumber = Math.floor(Math.random() * 7);
    setToast(toastContent[randomNumber]);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction='right' />;
  }

  return (
    <Box bgcolor='#F3F3F0'>
      <Container>
        <Typography
          sx={{
            color: '#2A2731',
            display: 'flex',
            alignItems: 'center',
            pt: 1,
          }}
          gutterBottom
          variant='h6'
        >
          <CookieIcon sx={{ mr: 0.4, fontSize: 18, color: '#8A5C43' }} />{' '}
          {title}
        </Typography>
        <Container
          sx={{
            fontSize: '1.05rem',
            pb: 4,
          }}
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        ></Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {ifLiked ? (
            <Fab size='small' sx={{ backgroundColor: '#E69D25', boxShadow: 1 }}>
              <FavoriteRoundedIcon
                onClick={() => {
                  setIfLiked(false);
                }}
                sx={{
                  fontSize: '1.5rem',
                  color: '#ad1457',
                }}
              />
            </Fab>
          ) : (
            <Fab
              size='small'
              sx={{
                backgroundColor: '#F3F3F0',
                boxShadow: 1,
              }}
            >
              <FavoriteBorderRoundedIcon
                onClick={() => {
                  setIfLiked(true);
                  setTransition(() => TransitionLeft);
                  setOpen(true);
                  generateRandomToast();
                }}
                sx={{
                  fontSize: '1.5rem',
                  color: '#ad1457',
                }}
              />
            </Fab>
          )}
          <Link href='/'>
            <Button
              sx={{ color: '#F3F3F0', backgroundColor: '#7297C1' }}
              color='primary'
              variant='contained'
              size='small'
            >
              <KeyboardReturnIcon sx={{ fontSize: '1.3rem' }} />
            </Button>
          </Link>
        </Box>
        <Snackbar
          sx={{ mb: '35vh' }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          TransitionComponent={transition}
        >
          <Alert onClose={handleClose} severity='info'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{ display: 'inline', mr: 0.5, fontSize: '1rem' }}
                variant='subtitle2'
              >
                {toast}
              </Typography>
              <BlurOnIcon
                sx={{ display: 'inline', fontSize: '1.5rem', color: '#f57f17' }}
              />
            </Box>
          </Alert>
        </Snackbar>
      </Container>
    </Box>
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
