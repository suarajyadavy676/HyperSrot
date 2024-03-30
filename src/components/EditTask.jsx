import React from 'react'
import { useDisclosure,Button,Modal,ModalOverlay,ModalContent ,ModalHeader,ModalCloseButton,ModalBody,ModalFooter} from '@chakra-ui/react'

function EditTask() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen}>Edit</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <h1>hello</h1>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
           reset
          </Button>
          <Button variant='ghost'>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default EditTask
