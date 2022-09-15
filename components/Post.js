import Link from 'next/link';
import Image from 'next/image';
import {
  Button,
  Card,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const Post = ({ post, handleClick }) => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef);
  const variants = {
    active: {
      y: [5, 0],
      opacity: [0.5, 1],
      transition: { duration: 0.2, delay: 0.1 },
    },
    inactive: { opacity: [1, 0.5], transition: { duration: 0.2 } },
  };
  return (
    <Card
      sx={{
        maxWidth: 350,
        mx: 'auto',
        my: 2,
        py: 1,
        backgroundColor: '#fcfbf8',
      }}
      elevation={2}
    >
      <motion.div
        animate={isInView ? 'active' : 'inactive'}
        variants={variants}
      >
        <CardHeader
          disableTypography={true}
          title={
            <Typography
              sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                fontFamily: 'sans-serif',
                width: 'max-content',
                borderRadius: 0.2,
                px: 1,
                color: 'white',
                backgroundColor: '#506D2F',
              }}
              gutterBottom
              variant='h6'
              ref={inViewRef}
            >
              {post.frontMatter.title}
            </Typography>
          }
        ></CardHeader>
      </motion.div>
      <CardMedia
        component='img'
        height='150'
        image={post.frontMatter.cover_image}
        alt=''
      />
      <CardContent>
        <Typography sx={{ fontSize: '0.92rem' }} variant='body1'>
          <StickyNote2RoundedIcon sx={{ fontSize: '1rem', color: '#2A2922' }} />{' '}
          {post.frontMatter.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/blog/${post.slug}`}>
          <Button
            sx={{ color: '#F3EBDD', mx: 1, backgroundColor: '#7D5642' }}
            color='primary'
            variant='contained'
            size='small'
            onClick={handleClick}
          >
            Read more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
