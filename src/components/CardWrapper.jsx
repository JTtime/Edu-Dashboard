import { Box } from '@mui/material';
import React from 'react';

export default function CardWrapper ({children}) {
    return (
        <>
        <Box sx={{border: '2px solid blue', borderRadius: '8px', padding: '1rem', height: '100%', backgroundColor: 'white'}}>
            {children}
        </Box>
        </>
    )
}