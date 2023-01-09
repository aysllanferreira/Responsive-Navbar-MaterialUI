import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, Grid, Typography,
} from '@mui/material';

import {
  MenuRounded, CloseRounded,
} from '@mui/icons-material';

function MobileNav({ setOpenDrawer, setMenuOpen, menuOpen }) {
  return (
    <Grid container spacing={2} alignItems="center">
      {/* Grid Brand */}
      <Grid item xs={3}>
        <Typography variant="h6" textAlign="center">
          Brand
        </Typography>
      </Grid>

      {/* Grid Hamberger menu */}
      <Grid item xs={9}>
        <Box display="flex" justifyContent="flex-end">
          {menuOpen ? (
            <Button
              onClick={() => {
                setMenuOpen(false);
                setOpenDrawer(false);
              }}
              sx={{
                color: 'white',
                zIndex: 9999,
              }}
            >
              <CloseRounded />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setMenuOpen(true);
                setOpenDrawer(true);
              }}
              sx={{ color: 'white' }}
            >
              <MenuRounded />
            </Button>
          )}

        </Box>
      </Grid>
    </Grid>
  );
}

MobileNav.propTypes = {
  setOpenDrawer: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default MobileNav;
