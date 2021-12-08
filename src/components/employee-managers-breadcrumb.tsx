import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  EmployeeHierarchicalDataByEmployeeId,
  OrderedManagerIdsByEmployeeId,
} from '../utils/types';
import { getEmployeeName } from '../utils/util-function';

type EmployeeManagerBreadcrumbProps = {
  activeEmployeeId: string;
  orderedManagerIdsByEmployeeId: OrderedManagerIdsByEmployeeId;
  employeeHierarchicalDataByEmployeeId: EmployeeHierarchicalDataByEmployeeId;
};

/**
 * clickable links to employee manager
 */
export const EmployeeManagerBreadcrumbs: FC<EmployeeManagerBreadcrumbProps> = (props) => {
  const { activeEmployeeId, orderedManagerIdsByEmployeeId, employeeHierarchicalDataByEmployeeId } =
    props;
  const managers = orderedManagerIdsByEmployeeId[activeEmployeeId];

  // sanity check
  if (!managers) {
    return null;
  }

  return (
    <>
      Managers
      <Breadcrumb separator={<ChevronRightIcon color={'gray.500'} />}>
        {managers
          .map((manager) => {
            return (
              <BreadcrumbItem key={`${manager}-breadcrumb-for-${activeEmployeeId}`}>
                <BreadcrumbLink as={Link} to={`/employee/${manager}`}>
                  {getEmployeeName(employeeHierarchicalDataByEmployeeId[manager])}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })
          .reverse()}
      </Breadcrumb>
    </>
  );
};
