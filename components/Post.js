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

const Post = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 2, px: 1 }}>
      <CardHeader
        disableTypography={true}
        title={
          <Typography gutterBottom variant='h6'>
            {post.frontMatter.title}
          </Typography>
        }
      ></CardHeader>
      <CardMedia
        component='img'
        height='150'
        image={post.frontMatter.cover_image}
        alt=''
      />
      <CardContent>
        <Typography variant='body2'>{post.frontMatter.excerpt}</Typography>
      </CardContent>
      <CardActions>
        <Link href={`/blog/${post.slug}`}>
          <Button color='secondary' variant='contained' size='small'>
            Read more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
