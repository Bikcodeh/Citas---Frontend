import { useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Modal, Button } from "@chakra-ui/react"

interface Props {
    title: string;
    confirmTitle: string;
    header: string;
    open: boolean;
    onCloseModal: () => void;
    onConfirm: () => void;
}

export const ModalConfirmation: React.FC<Props> = ({ onCloseModal, onConfirm, open, title, confirmTitle, header }) => {

    const { onClose } = useDisclosure()
    return (
        <>
            <Modal isOpen={open} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{header}</ModalHeader>
                    <ModalCloseButton onClick={() => onCloseModal()} />
                    <ModalBody>
                        {title}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            onClose()
                            onCloseModal()
                        }}>
                            Cancel
                        </Button>
                        <Button onClick={onConfirm} variant='ghost'>{confirmTitle}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
