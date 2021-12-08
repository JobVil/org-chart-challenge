import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import React, { FC, useContext } from 'react';
import { EmployeeHierarchicalData } from '../utils/types';
import { Button, Text } from '@chakra-ui/react';
import { InputWithCopy } from './input-with-copy';
import { CustomRouterContext } from '../contexts/custom-router-contex';

type EmployeeAccordingProps = {
  employeeHierarchicalData: EmployeeHierarchicalData;
};

export const EmployeeAccording: FC<EmployeeAccordingProps> = (props) => {
  const { navigateToEmployee } = useContext(CustomRouterContext);
  const { employeeHierarchicalData } = props;

  return (
    <Box>
      <Flex justifyContent={'center'}>
        <Accordion allowToggle w={'fit-content'} border={'1px solid #CDCDCD'} borderRadius={'5px'}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  {`${employeeHierarchicalData.firstName} ${employeeHierarchicalData.lastName}`}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection={'column'}>
                <Stack spacing={4}>
                  <Box>
                    <Text fontSize="sm" textAlign="center">
                      {employeeHierarchicalData.company}
                    </Text>
                  </Box>
                  <InputWithCopy
                    inputTitle={'Email :'}
                    inputProps={{
                      type: 'email',
                      placeholder: 'emailed address',
                      defaultValue: employeeHierarchicalData.email,
                      isReadOnly: true,
                    }}
                  />
                  <InputWithCopy
                    inputTitle={'Phone # :'}
                    inputProps={{
                      type: 'tel',
                      placeholder: 'emailed address',
                      defaultValue: employeeHierarchicalData.phone,
                      isReadOnly: true,
                    }}
                  />
                  <Button onClick={() => navigateToEmployee(employeeHierarchicalData.id)}>
                    View Employee
                  </Button>
                </Stack>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Box>
  );
};
// actual accordion that handel render accordion and the open accordion

/*

*/
