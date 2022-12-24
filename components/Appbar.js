import {
  AppBar,
  Typography,
  Container,
  Avatar,
  Toolbar,
  IconButton,
} from '@mui/material';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';

const Appbar = () => {
  return (
    <AppBar
      sx={{ backgroundColor: '#7297C1', boxShadow: 'none' }}
      position='static'
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
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
            color: '#2A2731',
            textDecoration: 'none',
            alignItems: 'center',
          }}
        >
          SentientNode
          <Face6RoundedIcon
            sx={{
              color: '#2A2731',
              boxShadow: 'none',
              fontSize: 18,
            }}
          />
        </Typography>

        <Avatar
          sx={{ ml: 'auto', boxShadow: 'none' }}
          alt='Developer Photo'
          src='/images/avatar/1.jpg'
        />
      </Container>
    </AppBar>
  );
};

export default Appbar;
