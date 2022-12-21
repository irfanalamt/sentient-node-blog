import PropTypes from 'prop-types';
import { Box, Button, Container, Typography } from '@mui/material';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';

function Footer({ description, title }) {
  return (
    <Box
      component='footer'
      sx={{
        mt: 4,
        py: 6,
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        maxWidth: '50vw',
        marginX: 'auto',
      }}
    >
      <Container maxWidth='xs'>
        <Typography
          sx={{ fontFamily: 'monospace', fontSize: '1rem' }}
          variant='subtitle2'
          align='center'
          gutterBottom
        >
          {title}
          <Face6RoundedIcon sx={{ fontSize: 14 }} />
        </Typography>
        <Button
          sx={{ color: 'black', fontSize: 14 }}
          size='medium'
          href='/about'
        >
          About
        </Button>
        <Typography
          sx={{ fontSize: 14 }}
          variant='subtitle1'
          align='center'
          color='text.secondary'
          component='p'
        >
          {description}
        </Typography>
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
