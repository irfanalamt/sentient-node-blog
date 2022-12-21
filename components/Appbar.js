import { AppBar, Typography, Container, Avatar } from '@mui/material';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';

const Appbar = () => {
  return (
    <AppBar sx={{ mb: 1, backgroundColor: '#fcfbf8' }} position='static'>
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant='h6'
          noWrap
          component='a'
          href='/'
          sx={{
            mr: 2,
            my: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: '#2A2922',
            textDecoration: 'none',
            alignItems: 'center',
          }}
        >
          SentientNode
          <Face6RoundedIcon
            sx={{
              color: '#2A2922',
              boxShadow: 1,
              borderRadius: 5,
              fontSize: 18,
            }}
          />
        </Typography>

        <Avatar
          sx={{ ml: 'auto', boxShadow: 1 }}
          alt='Developer Photo'
          src='/images/avatar/1.jpg'
        />
      </Container>
    </AppBar>
  );
};

export default Appbar;
