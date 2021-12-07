// button for adding an employee

import { IconButton } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  AccordionPanel,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { FC, useRef, useState } from 'react';
import { EmployeeHierarchicalData } from '../utils/types';
import { InputWithCopy } from './input-with-copy';

type AddEmployeeModalBodyProps = {
  setEmployeeInfo: React.Dispatch<React.SetStateAction<EmployeeHierarchicalData>>;
};

export const AddEmployeeModalBody: FC<AddEmployeeModalBodyProps> = (props) => {
  const { setEmployeeInfo } = props;

  return (
    <>
      <Flex flexDirection={'column'}>
        <Stack spacing={4}>
          <InputWithCopy
            inputTitle={'First Name :'}
            inputProps={{
              type: 'text',
              placeholder: 'first name',
              isReadOnly: false,
            }}
            onChange={(newValue) => {
              setEmployeeInfo((oldEmployeeInfo) => {
                const newEmployeeInfo = { ...oldEmployeeInfo, ...{ firstName: newValue } };
                return newEmployeeInfo;
              });
            }}
          />
          <InputWithCopy
            inputTitle={'Last Name :'}
            inputProps={{
              type: 'text',
              placeholder: 'last name',
              isReadOnly: false,
            }}
            onChange={(newValue) => {
              setEmployeeInfo((oldEmployeeInfo) => {
                const newEmployeeInfo = { ...oldEmployeeInfo, ...{ lastName: newValue } };
                return newEmployeeInfo;
              });
            }}
          />
          <InputWithCopy
            inputTitle={'Address # :'}
            inputProps={{
              type: 'text',
              placeholder: 'address',
              isReadOnly: false,
            }}
            onChange={(newValue) => {
              setEmployeeInfo((oldEmployeeInfo) => {
                const newEmployeeInfo = { ...oldEmployeeInfo, ...{ address: newValue } };
                return newEmployeeInfo;
              });
            }}
          />
          <InputWithCopy
            inputTitle={'Company :'}
            inputProps={{
              type: 'text',
              defaultValue: 'MidFirst Bank',
              isReadOnly: false,
            }}
            onChange={(newValue) => {
              setEmployeeInfo((oldEmployeeInfo) => {
                const newEmployeeInfo = { ...oldEmployeeInfo, ...{ company: newValue } };
                return newEmployeeInfo;
              });
            }}
          />
          <InputWithCopy
            inputTitle={'Phone # :'}
            inputProps={{
              type: 'tel',
              placeholder: 'phone number',
              isReadOnly: false,
            }}
            onChange={(newValue) => {
              setEmployeeInfo((oldEmployeeInfo) => {
                const newEmployeeInfo = { ...oldEmployeeInfo, ...{ phone: newValue } };
                return newEmployeeInfo;
              });
            }}
          />
          <InputWithCopy
            inputTitle={'Email :'}
            inputProps={{
              type: 'email',
              placeholder: 'emailed address',
              isReadOnly: false,
            }}
            onChange={(newValue) => {
              setEmployeeInfo((oldEmployeeInfo) => {
                const newEmployeeInfo = { ...oldEmployeeInfo, ...{ email: newValue } };
                return newEmployeeInfo;
              });
            }}
          />
        </Stack>
      </Flex>
    </>
  );
};
