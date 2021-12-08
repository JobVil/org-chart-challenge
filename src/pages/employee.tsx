import { Button } from '@chakra-ui/button';
import { VStack } from '@chakra-ui/layout';
import { FC, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActiveEmployeeInformation } from '../components/active-employee-information';
import { EmployeeDirectsBreadcrumbs } from '../components/employee-directs-breadcrumb';
import { EmployeeManagerBreadcrumbs } from '../components/employee-managers-breadcrumb';
import { CustomRouterContext } from '../contexts/custom-router-contex';
import { useEmployeeData } from '../hooks/useEmployeeData';
import { useFormateEmployeeData } from '../hooks/useFormatEmployeeData';

// page for individual employees clicked
export const Employee: FC = () => {
  const { activeEmployeeId } = useParams<'activeEmployeeId'>();
  const { navigateHome } = useContext(CustomRouterContext);
  const rawEmployeeData = useEmployeeData();
  const formattedData = useFormateEmployeeData(rawEmployeeData.data);

  // sanity check
  if (!activeEmployeeId || !formattedData.employeeHierarchicalDataByEmployeeId[activeEmployeeId]) {
    navigateHome();
    return null;
  }

  return (
    <VStack spacing={'20px'}>
      <EmployeeManagerBreadcrumbs
        activeEmployeeId={activeEmployeeId}
        orderedManagerIdsByEmployeeId={formattedData.orderedManagerIdsByEmployeeId}
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
