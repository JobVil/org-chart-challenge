// button for adding an employee;
import { Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { EmployeeHierarchicalData } from '../utils/types';
import { InputWithCopy } from './input-with-copy';

type EmployeeInformationInputsProps = {
  setEmployeeInfo: React.Dispatch<React.SetStateAction<EmployeeHierarchicalData>>;
  isReadOnly: boolean;
  employeeInfo?: EmployeeHierarchicalData;
};

/**
 * displays employees information for viewing, coping or editing
 */
export const EmployeeInformationInputs: FC<EmployeeInformationInputsProps> = (props) => {
  const { employeeInfo, setEmployeeInfo, isReadOnly } = props;

  return (
    <>
      <Flex flexDirection={'column'}>
        <Stack spacing={4}>
          <InputWithCopy
            inputTitle={'First Name :'}
            inputProps={{
              type: 'text',
              placeholder: 'first name',
              defaultValue: employeeInfo?.firstName,
              isReadOnly: isReadOnly,
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
              defaultValue: employeeInfo?.lastName,
              isReadOnly: isReadOnly,
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
              defaultValue: employeeInfo?.address,
              isReadOnly: isReadOnly,
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
              defaultValue: employeeInfo?.company || 'MidFirst Bank',
              isReadOnly: isReadOnly,
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
              defaultValue: employeeInfo?.phone,
              isReadOnly: isReadOnly,
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
              defaultValue: employeeInfo?.email,
              isReadOnly: isReadOnly,
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
