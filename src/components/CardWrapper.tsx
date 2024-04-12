import { Box } from '@mui/material';
import React, { ReactNode, FC } from 'react';

interface CardWrapperProps {
    children: ReactNode;
}

const CardWrapper: FC<CardWrapperProps> = ({children}) => {
    return (
        <>
            <Box sx={{ border: '2px solid blue', borderRadius: '8px', padding: '1rem', height: '100%', backgroundColor: 'white' }}>
                {children}
            </Box>
        </>
    )
}

export default CardWrapper;
