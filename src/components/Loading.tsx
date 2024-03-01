import React from 'react';
import { Box, Spinner } from '@chakra-ui/react'

interface Props {
    full?: boolean;
}

const Loading: React.FC<Props> = ({full = false}) => {
    return (
        <Box className={full ? 'w-screen h-screen' : ''} display="flex" justifyContent="center" alignContent="center">
            <Spinner alignSelf='center' />
        </Box>
    )
}

export default Loading;