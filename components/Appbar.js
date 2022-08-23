import { AppBar, Tooltip, Typography, Container, Avatar } from '@mui/material';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';

const Appbar = () => {
  return (
    <AppBar sx={{ mb: 1, backgroundColor: '#4897d8' }} position='static'>
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title=''>
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
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            Sentient Node
            <Face6RoundedIcon
              sx={{
                color: 'black',
                backgroundColor: '#efebe9',
                boxShadow: 1,
                borderRadius: 5,
                fontSize: 18,
              }}
            />
          </Typography>
        </Tooltip>
        <Avatar
          sx={{ ml: 'auto' }}
          alt='Developer Photo'
          src='/images/avatar/1.jpg'
        />
      </Container>
    </AppBar>
  );
};

export default Appbar;
