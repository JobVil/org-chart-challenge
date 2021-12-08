import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeHierarchicalDataByManagerId } from '../utils/types';
import { getEmployeeName } from '../utils/util-function';

type EmployeeDirectsBreadcrumbProps = {
  activeEmployeeId: string;
  employeeHierarchicalDataByManagerId: EmployeeHierarchicalDataByManagerId;
};

/**
 * clickable links to the employees that the active employee manages
 */
export const EmployeeDirectsBreadcrumbs: FC<EmployeeDirectsBreadcrumbProps> = ({
  activeEmployeeId,
  employeeHierarchicalDataByManagerId,
}) => {
  const directEmployees = employeeHierarchicalDataByManagerId[activeEmployeeId];

  // sanity check
  if (!directEmployees) {
    return null;
  }

  return (
    <Box textAlign={'center'}>
      Direct Employees
      <Breadcrumb separator={<Text color={'gray.500'}>|</Text>}>
        {directEmployees.map((directEmployee) => {
          return (
            <BreadcrumbItem key={`${directEmployee.id}-breadcrumb-for-${activeEmployeeId}`}>
              <BreadcrumbLink as={Link} to={`/employee/${directEmployee.id}`}>
                {getEmployeeName(directEmployee)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Box>
  );
};
