import { AppBar, Tooltip, Typography, Container, Avatar } from '@mui/material';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';
import { useEffect, useState } from 'react';

const Appbar = () => {
  const [iconColor, setIconColor] = useState('black');
  const [rotationDeg, setRotationDeg] = useState(0);
  let index = 0;

  useEffect(() => {
    setInterval(() => {
      console.log('haha✨');
      changeColor();
    }, 4000);
  }, []);

  function changeColor() {
    const colorList = ['#d81b60', '#43a047', 'black'];
    setIconColor(colorList[index]);
    if (index < colorList.length - 1) {
      index++;
      return;
    }
    index = 0;
  }

  function setFontSize() {
    if (iconColor == '#43a047') return 19;
    if (iconColor == '#d81b60') return 20;
    return 18;
  }

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
                color: iconColor,
                backgroundColor: '#efebe9',
                boxShadow: 1,
                borderRadius: 5,
                fontSize: setFontSize(),
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
