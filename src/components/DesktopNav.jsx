import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, Tabs, Tab, Typography,
} from '@mui/material';

function DesktopNav({
  value, setValue, navLinks, navButtons,
}) {
  return (
    <Grid container spacing={2} alignItems="center">
      {/* Grid Brand */}
      <Grid item xs={3}>
        <Typography
          variant="h6"
          textAlign="center"
        >
          Brand

        </Typography>
      </Grid>

      {/* Grid Menu */}
      <Grid item xs={6}>
        <Tabs
          value={value}
          centered
          indicatorColor="secondary"
          textColor="inherit"
          onChange={(event, newValue) => setValue(newValue)}
        >
          {navLinks.map((link) => (
            <Tab
              label={link.name}
            />
          ))}
        </Tabs>
      </Grid>

      {/* Grid Login */}
      <Grid item xs={3} container justifyContent="flex-end" gap={3}>
        {navButtons.map((button) => (
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              backgroundColor: 'secondary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'secondary.dark',
              },
            }}
          >
            {button.name}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}

DesktopNav.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
  navButtons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
};

export default DesktopNav;
