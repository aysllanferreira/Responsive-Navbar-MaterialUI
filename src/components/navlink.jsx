import React from 'react';
import HomeRounded from '@mui/icons-material/HomeRounded';
import InfoRounded from '@mui/icons-material/InfoRounded';
import PermContactCalendarRounded from '@mui/icons-material/PermContactCalendarRounded';
import WorkRounded from '@mui/icons-material/WorkRounded';
import ExitToAppRounded from '@mui/icons-material/ExitToAppRounded';
import HowToRegRounded from '@mui/icons-material/HowToRegRounded';

const navLinks = [
  {
    name: 'Home',
    icon: <HomeRounded sx={{ fontSize: '2rem' }} />,
  },
  {
    name: 'About',
    icon: <InfoRounded sx={{ fontSize: '2rem' }} />,
  },
  {
    name: 'Contact',
    icon: <PermContactCalendarRounded sx={{ fontSize: '2rem' }} />,
  },
  {
    name: 'Carrer',
    icon: <WorkRounded sx={{ fontSize: '2rem' }} />,
  },
];
const navButtons = [
  {
    name: 'Login',
    icon: <ExitToAppRounded sx={{ fontSize: '2rem' }} />,
  },
  {
    name: 'Register',
    icon: <HowToRegRounded sx={{ fontSize: '2rem' }} />,
  },
];

export {
  navLinks,
  navButtons,
};
