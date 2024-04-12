
// import { useRouter } from 'next/navigation';
import { cloneElement, useState } from 'react';

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
// import Link from 'next/link';

const drawerWidth = 240;

export default function Sidebar({
  list = [],
  open = false,
  PaperProps = {},
  SlideProps = {},
  variant = 'permanent',
  anchor = 'left',
  hideBackdrop = false,
  currentSelectedSection = ''
}) {
  // const router = useRouter();

  //From url select the active sidebar section
  const [selectedSection, setSelectedSection] = useState(
    currentSelectedSection
  );

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const drawer = (
    <>
      <List sx={{ paddingTop: '7.06rem' }}>
        {list.map((item, index) => (
          <a
            key={index}
            href={item.redirectURL}
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <ListItemButton
                sx={{
                  color: 'primary.main',

                  '&.MuiListItemButton-root:hover': {
                    backgroundColor: 'secondary.light',
                    borderRadius: '0.75rem'
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'secondary.main',
                    borderRadius: '0.75rem',
                    color: 'white.main',
                    '&.MuiListItemButton-root:hover': {
                      backgroundColor: 'secondary.main'
                    }
                  },
                  display: 'flex',
                  justifyContent: 'center',
                }}
                selected={item.value === selectedSection}
                onClick={() => {
                  setSelectedSection(item.value);
                }}
              >
                <ListItemIcon sx={{ justifyContent: 'center' }}>
                  {cloneElement(item.icon, {
                    color: item.value === selectedSection ? 'white' : 'black'
                  })}
                </ListItemIcon>
                
                   <Box style={{
                    width: collapsed ? 0 : 'calc(100%)', 
                    transition: 'width 1s ease-out', 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                  }}>
                    <ListItemText primary={item.label}  />
                  </Box>
                
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </>
  );

  return (
    <>
      <Drawer
        variant={variant}
        sx={{
          width: collapsed ? 80 : drawerWidth,
          flexShrink: 0,          
          transition: 'width 0.5s',
        }}
        PaperProps={{
          sx: {
            zIndex: '1',
            width: collapsed ? 80 : drawerWidth,
            boxSizing: 'border-box',            
            transition: 'width 0.5s',
            overflow: 'visible',
          }
        }}
        open={!collapsed}
        anchor={anchor}
        {...PaperProps}
        {...SlideProps}
        hideBackdrop={hideBackdrop}
      >
        {drawer}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', position: 'absolute', bottom: '5rem', right: '-0.5rem' }}>
          <IconButton
            onClick={toggleCollapse}
            style={{
              backgroundColor: '#51cea2',
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: 'blue',
              },

              padding: '8px', 
            }}>
            {collapsed ? <LastPageRoundedIcon /> : <FirstPageRoundedIcon />}
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
}
