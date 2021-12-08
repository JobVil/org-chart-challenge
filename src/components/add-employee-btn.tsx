// button for adding an employee

import { IconButton } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { FC, useRef, useState } from 'react';
import { EmployeeHierarchicalData } from '../utils/types';
import { v4 as uuidv4 } from 'uuid';
import { EmployeeInformationInputs } from './employee-information-inputs';

type AddEmployeeBtnProps = {
  managerId: string;
  addEmployee: (newEmployee: EmployeeHierarchicalData) => void;
};

/**
 * triggers a modal to add a new employee to tree
 */
export const AddEmployeeBtn: FC<AddEmployeeBtnProps> = ({ managerId, addEmployee }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [employeeInfo, setEmployeeInfo] = useState<EmployeeHierarchicalData>({
    id: uuidv4(),
    firstName: '',
    lastName: '',
    company: 'MidFirst Bank',
    email: '',
    phone: '',
    address: '',
    manager: managerId,
  });
  const finalRef = useRef(null);

  const onAddEmployeeClicked = () => {
    addEmployee(employeeInfo);
    // resets modal information because modal doesn't remount
    setEmployeeInfo({
      id: uuidv4(),
      firstName: '',
      lastName: '',
      company: 'MidFirst Bank',
      email: '',
      phone: '',
      address: '',
      manager: managerId,
    });
    onClose();
  };

  return (
    <>
      <IconButton aria-label={'Add Employees'} icon={<AddIcon />} onClick={onOpen} />
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EmployeeInformationInputs setEmployeeInfo={setEmployeeInfo} isReadOnly={false} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={'blue'} mr={3} onClick={onAddEmployeeClicked}>
              Add Employee
            </Button>
            <Button variant={'ghost'} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
