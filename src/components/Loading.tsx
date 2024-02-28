import React from 'react';
import { Box, Spinner } from '@chakra-ui/react'

const Loading: React.FC = () => {
    return (
        <Box display="flex" justifyContent="center" alignContent="center">
            <Spinner />
        </Box>
    )
}

export default Loading;