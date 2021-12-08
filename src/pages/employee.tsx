import { Button } from '@chakra-ui/button';
import { VStack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { FC, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActiveEmployeeInformation } from '../components/active-employee-information';
import { EmployeeDirectsBreadcrumbs } from '../components/employee-directs-breadcrumb';
import { EmployeeInformationInputs } from '../components/employee-information-inputs';
import { EmployeeManagerBreadcrumbs } from '../components/employee-managers-breadcrumb';
import { CustomRouterContext } from '../contexts/custom-router-contex';
import { useEmployeeData } from '../hooks/useEmployeeData';
import { useFormateEmployeeData } from '../hooks/useFormatEmployeeData';
import { EmployeeHierarchicalData } from '../utils/types';

// page for individual employees clicked
type EmployeeProps = {};
export const Employee: FC<EmployeeProps> = (props) => {
  const { activeEmployeeId } = useParams<'activeEmployeeId'>();
  const { navigateHome } = useContext(CustomRouterContext);

  const rawEmployeeData = useEmployeeData();
  const formattedData = useFormateEmployeeData(rawEmployeeData.data);
  if (!activeEmployeeId || !formattedData.employeeHierarchicalDataByEmployeeId[activeEmployeeId]) {
    navigateHome();
    return null;
  }

  return (
    <VStack spacing={'20px'}>
      <EmployeeManagerBreadcrumbs
        activeEmployeeId={activeEmployeeId}
        orderedManagerIdsByEmployee={formattedData.orderedManagerIdsByEmployee}
        employeeHierarchicalDataByEmployeeId={formattedData.employeeHierarchicalDataByEmployeeId}
      />
      <ActiveEmployeeInformation
        key={`${activeEmployeeId}-inputs`}
        editEmployee={rawEmployeeData.editEmployee}
        activeEmployee={formattedData.employeeHierarchicalDataByEmployeeId[activeEmployeeId]}
      />
      <Button onClick={navigateHome}>Go Home</Button>
      <EmployeeDirectsBreadcrumbs
        activeEmployeeId={activeEmployeeId}
        employeeHierarchicalDataByManagerId={formattedData.employeeHierarchicalDataByManagerId}
      />
    </VStack>
  );
};
