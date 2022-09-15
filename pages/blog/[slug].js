import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useState } from 'react';

const PostPage = ({ frontMatter: { title, cover_image }, slug, content }) => {
  const [ifLiked, setIfLiked] = useState(false);
  const parsedContent = marked.parse(content);
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
        sx={{ pl: 1, pr: 3, py: 1, my: 1, fontSize: '1rem' }}
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
          >
            Go back
          </Button>
        </Link>
        {ifLiked ? (
          <Avatar sx={{ backgroundColor: '#fdfdfb', boxShadow: 1 }}>
            <FavoriteRoundedIcon
              onClick={() => {
                setIfLiked(false);
              }}
              sx={{
                fontSize: '2.2rem',
                color: '#ad1457',
              }}
            />
          </Avatar>
        ) : (
          <Avatar
            sx={{
              backgroundColor: '#fdfdfb',
              boxShadow: 1,
            }}
          >
            <FavoriteBorderRoundedIcon
              onClick={() => {
                setIfLiked(true);
              }}
              sx={{
                fontSize: '2.2rem',
                color: '#ad1457',
              }}
            />
          </Avatar>
        )}
      </Box>
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
