import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';

const PostPage = ({ frontMatter: { title, cover_image }, slug, content }) => {
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

      <div name='post-body'>
        <Box dangerouslySetInnerHTML={{ __html: parsedContent }}></Box>
      </div>
      <Link href='/'>
        <Button
          sx={{ color: 'white', backgroundColor: '#F8A055' }}
          color='secondary'
          variant='contained'
        >
          Go back
        </Button>
      </Link>
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
