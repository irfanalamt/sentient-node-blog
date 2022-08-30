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
      y: [4, 0],
      opacity: [0.5, 1],
      transition: { duration: 0.5 },
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
        backgroundColor: '#fafafa',
      }}
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
                borderRadius: 1,
                px: 1,
                backgroundColor: '#F8A055',
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
        sx={{ boxShadow: 1 }}
        component='img'
        height='150'
        image={post.frontMatter.cover_image}
        alt=''
      />
      <CardContent>
        <Typography variant='body2'>
          <StickyNote2RoundedIcon sx={{ fontSize: 15 }} />{' '}
          {post.frontMatter.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/blog/${post.slug}`}>
          <Button
            sx={{ color: '#757575', mx: 1 }}
            color='secondary'
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
