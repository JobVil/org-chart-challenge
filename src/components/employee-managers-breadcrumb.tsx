import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeHierarchicalDataByEmployeeId, OrderedManagerIdsByEmployee } from '../utils/types';

type EmployeeManagerBreadcrumbProps = {
  activeEmployeeId: string;
  orderedManagerIdsByEmployee: OrderedManagerIdsByEmployee;
  employeeHierarchicalDataByEmployeeId: EmployeeHierarchicalDataByEmployeeId;
};
export const EmployeeManagerBreadcrumbs: FC<EmployeeManagerBreadcrumbProps> = (props) => {
  const { activeEmployeeId, orderedManagerIdsByEmployee, employeeHierarchicalDataByEmployeeId } =
    props;
  const managers = orderedManagerIdsByEmployee[activeEmployeeId];
  if (!managers) {
    return null;
  }

  return (
    <>
      Managers
      <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
        {managers
          .map((manager) => {
            return (
              <BreadcrumbItem key={`${manager}-breadcrumb-for-${activeEmployeeId}`}>
                <BreadcrumbLink as={Link} to={`/employee/${manager}`}>
                  {`${employeeHierarchicalDataByEmployeeId[manager].firstName}, ${employeeHierarchicalDataByEmployeeId[manager].lastName}`}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })
          .reverse()}
      </Breadcrumb>
    </>
  );
};
