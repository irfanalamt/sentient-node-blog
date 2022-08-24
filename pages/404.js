import { Box, Container, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';

const Error404 = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 5,
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          fontSize: '2rem',
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
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <Typography sx={{ fontSize: '2rem' }} variant='body1'>
          Lost? Let's return
        </Typography>
        <Link href='/'>
          <Tooltip title='HOME'>
            <Typography
              sx={{
                fontSize: '2rem',
                ml: 1,
                textDecoration: 'underline',
                color: '#FFDB5C',
              }}
            >
              home.
            </Typography>
          </Tooltip>
        </Link>
      </Box>
    </Container>
  );
};

export default Error404;
