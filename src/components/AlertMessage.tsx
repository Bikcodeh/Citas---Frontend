import React from 'react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    CloseButton,
    useDisclosure
} from '@chakra-ui/react';

interface AlertMessageProps {
    status: 'error' | 'success' | 'warning' | 'info';
    message: string;
    title: string;
    dismissible?: boolean;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ status, message, title, dismissible = false}) => {

    const { onClose, isOpen: isVisible, } = useDisclosure({ defaultIsOpen: true });

    return isVisible && (
        <Alert status={status} className='my-8 w-full' justifyContent="space-between">
            <Box className='w-full' display="flex">
                <AlertIcon />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
            </Box>
            {
                dismissible && (
                    <CloseButton
                        alignSelf='flex-end'
                        position='relative'
                        right={-1}
                        top={-1}
                        onClick={onClose}
                    />
                )
            }
        </Alert>
    )
}

export default AlertMessage;