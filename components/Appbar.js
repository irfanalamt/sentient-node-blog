import { AppBar, Tooltip, Typography, Container, Avatar } from '@mui/material';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';
import { useEffect, useState } from 'react';

const Appbar = () => {
  const [rotationDeg, setRotationDeg] = useState(0);
  let deg = 1;

  useEffect(() => {
    setInterval(() => {
      console.log('haha✨');
      changeRotation();
    }, 100);
  }, []);

  function changeRotation() {
    setRotationDeg(deg);
    if (deg < 360) {
      deg += 2;
      return;
    }
    deg = 0;
  }
  function setColor() {
    if (rotationDeg >= 0 && rotationDeg <= 90) return 'black';
    if (rotationDeg > 90 && rotationDeg <= 180) return '#f9a825';
    if (rotationDeg > 180 && rotationDeg <= 270) return '#ff8f00';
    return '#ef6c00';
  }

  return (
    <AppBar sx={{ mb: 1, backgroundColor: '#4897d8' }} position='static'>
      <Container
        sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}
      >
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
                color: setColor(),
                position: 'absolute',
                backgroundColor: '#efebe9',
                boxShadow: 1,
                borderRadius: 5,
                fontSize: 18,
                rotate: `${rotationDeg}deg`,
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
