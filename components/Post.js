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
  Tooltip,
} from '@mui/material';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import CookieIcon from '@mui/icons-material/Cookie';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
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
        width: 340,
        mx: 'auto',
        my: 2,
        py: 1,
        backgroundColor: '#f4f4f1',
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
                fontFamily: 'sans-serif',
                width: 'max-content',
                px: 1,
                color: '#2A2731',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
              }}
              gutterBottom
              variant='subtitle1'
              ref={inViewRef}
            >
              <CookieIcon
                sx={{
                  color: '#2A2731',
                  mr: 0.4,
                  fontSize: 18,
                }}
              />
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
        <Typography sx={{ ml: 0.1, color: '#2A2731' }} variant='body2'>
          {post.frontMatter.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/blog/${post.slug}`}>
          <Button
            sx={{ ml: 'auto', mr: 1, backgroundColor: '#7297C1' }}
            color='primary'
            variant='contained'
            size='small'
            onClick={handleClick}
          >
            <ReadMoreIcon sx={{ color: '#F3F3F0', fontSize: '1.3rem' }} />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
