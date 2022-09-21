import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  Fab,
  Paper,
  Snackbar,
  Typography,
} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { useRef, useState } from 'react';

const PostPage = ({ frontMatter: { title, cover_image }, slug, content }) => {
  const [ifLiked, setIfLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState('');
  const parsedContent = marked.parse(content);

  const randomNumber = useRef(null);

  const handleClose = () => setOpen(false);

  const generateRandomNumber = () => Math.floor(Math.random() * 5);

  const toastContent = [
    'YOU are awesome.',
    'Give me back my unicorn.',
    'Sisyphus is happy.',
    'Life is good.',
    'wingardium leviosa.',
  ];

  const generateRandomToast = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log('randomNumber: ' + randomNumber);
    setToast(toastContent[randomNumber]);
  };

  return (
    <Container>
      <Typography
        sx={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          width: 'max-content',
          borderRadius: 1,
          px: 1,
          backgroundColor: '#FFDB5C',
        }}
        gutterBottom
        variant='h6'
      >
        {title}
      </Typography>

      <Paper
        sx={{ pl: 1, pr: 3, py: 1, my: 1, fontSize: '1.01rem' }}
        dangerouslySetInnerHTML={{ __html: parsedContent }}
      ></Paper>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href='/'>
          <Button
            sx={{ color: 'white', backgroundColor: '#506D2F' }}
            color='primary'
            variant='contained'
            size='small'
          >
            <ArrowBackIcon />
          </Button>
        </Link>

        {ifLiked ? (
          <Fab size='medium' sx={{ backgroundColor: '#fdfdfb', boxShadow: 1 }}>
            <FavoriteRoundedIcon
              onClick={() => {
                setIfLiked(false);
              }}
              sx={{
                fontSize: '2.2rem',
                color: '#ad1457',
              }}
            />
          </Fab>
        ) : (
          <Fab
            size='medium'
            sx={{
              backgroundColor: '#fdfdfb',
              boxShadow: 1,
            }}
          >
            <FavoriteBorderRoundedIcon
              onClick={() => {
                setIfLiked(true);
                setOpen(true);
                generateRandomToast();
              }}
              sx={{
                fontSize: '2.2rem',
                color: '#ad1457',
              }}
            />
          </Fab>
        )}
      </Box>
      <Snackbar
        sx={{ mb: 4 }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='info'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{ display: 'inline', mr: 1, fontSize: '1rem' }}
              variant='subtitle2'
            >
              {toast}
            </Typography>
            <BlurOnIcon
              sx={{ display: 'inline', fontSize: '1.5rem', color: '#e53935' }}
            />
          </Box>
        </Alert>
      </Snackbar>
    </Container>
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
