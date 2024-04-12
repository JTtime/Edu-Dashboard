// import Image from 'next/image';

import { Box } from '@mui/material';
// import logo from 'public/dashboard/logo/logo.svg';

import { NavbarContainer, NavbarRightContent } from './AdminNavbar.style';

export default function Navbar  ({ children }) {
  return (
    <NavbarContainer direction={'row'} alignItems={'center'}>
      <NavbarRightContent>
        <Box
          sx={{
            position: 'relative',
            alignSelf: 'center'
          }}
        >
          {/* <image
            src={logo}
            alt="logo"
            height={130}
            width={130}
            style={{ paddingTop: '0.31rem' }}
          /> */}
        </Box>
        {children}
      </NavbarRightContent>
      {/* {children.profileInfoSection} */}
    </NavbarContainer>
  );
};

// export default Navbar;
