import { Box, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

const Error404 = () => {
  const router = useRouter();
  return (
    <Box sx={{ backgroundColor: '#F3F3F0' }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.8rem',
            my: 1,
            width: 'max-content',
            backgroundColor: '#FA6E59',
            px: 1,
            borderRadius: 1,
          }}
          variant='h6'
        >
          Error 404
        </Typography>

        <Typography
          sx={{ fontSize: '1.6rem', mx: 'auto', textAlign: 'center' }}
          variant='body1'
        >
          Uh oh! Looks like you got lost in cyberspace.
        </Typography>
        <Button onClick={() => router.push('/')}>
          <HomeIcon sx={{ fontSize: '2.4rem', color: '#2A2922' }} />
        </Button>
      </Container>
    </Box>
  );
};

export default Error404;
