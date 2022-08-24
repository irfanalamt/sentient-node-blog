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

const Post = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 350, m: 2, py: 1, backgroundColor: '#e1f5fe' }}>
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
          >
            {post.frontMatter.title}
          </Typography>
        }
      ></CardHeader>
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
          >
            Read more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
