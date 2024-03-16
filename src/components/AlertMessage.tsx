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
    className?: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ status, message, title, dismissible = false, className ='w-full' }) => {

    const { onClose, isOpen: isVisible, } = useDisclosure({ defaultIsOpen: true });

    return isVisible && (
        <div className={className}>
            <Alert status={status} justifyContent="space-between" as="div">
                <Box display="flex">
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
        </div>
    )
}

export default AlertMessage;