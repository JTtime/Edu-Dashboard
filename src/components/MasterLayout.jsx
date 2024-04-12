'use client';
// import { usePathname } from 'next/navigation';

import { Box } from '@mui/material';

// import { Sidebar, Navbar } from 'ui';
// import ProfileSection from 'src/app/components/ProfileSection';
// import MenuItems from 'src/app/components/MenuItems';
// import { SIDEBAR } from 'src/app/constants/constant';
import Sidebar from './SideBar';
import Navbar from './Navbar';
// import { useSessionContext } from '../providers';

const SidebarSection = ({ listItems }) => {
//   const currentPathname = usePathname();
  return (
    <>
      <Sidebar

      />
    </>
  );
};

export function MasterLayout({ dashboardType, children }) {
//   const { auth } = useSessionContext();

  return (
    <>
      <Navbar>
        {/* {{
          menuItems: <MenuItems />,
          profileInfoSection: <ProfileSection />
        }} */}
      </Navbar>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <SidebarSection
            
          />
        </Box>
        <Box sx={{ width: '80%', flex: '1', transition: 'margin-left 0.3s' }}>
          {children}
        </Box>
      </Box>
    </>
  );
}
