'use client';
import { styled } from '@mui/system';
import { Stack, Box } from '@mui/material';
export const NavbarContainer = styled(Stack)({
  height: '60px',
  // width: "100vw",
  backgroundColor: '#021030',
  position: 'sticky',
  top: 0,
  zIndex: 4,
  padding: '0px 72px',
  justifyContent: 'space-between'
});

export const NavbarRightContent = styled(Box)({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
});

export const NavbarLeftContent = styled(Box)({
  height: '100%',
  display: 'flex',
  justifyContent: 'end',
  marginRight: '50px'
});
