// create chakra according for top level employees
import React, { FC, ReactNode } from 'react';
import { EmployeeAccording } from '../components/employee-according';
import { useEmployeeData } from '../hooks/useEmployeeData';
import { useFormateEmployeeData } from '../hooks/useFormatEmployeeData';
import { Tree, TreeNode } from 'react-organizational-chart';
import { NO_DIRECT_MANAGER } from '../utils/constants';
import { EmployeeHierarchicalData, EmployeeHierarchicalDataByManagerId } from '../utils/types';
import { AddEmployeeBtn } from '../components/add-employee-btn';
import { Box, Flex } from '@chakra-ui/layout';

type EmployeeHierarchicalType = {};

const appendAddEmployeeBtnToTreeBrand = (
  childNodeLeafs: React.ReactNode[],
  employeeHierarchicalData: EmployeeHierarchicalData,
  addEmployee: (newEmployee: EmployeeHierarchicalData) => void,
) => {
  childNodeLeafs.push(
    <TreeNode
      key={`${employeeHierarchicalData.id}-new-add-btn`}
      label={<AddEmployeeBtn managerId={employeeHierarchicalData.id} addEmployee={addEmployee} />}
    />,
  );
};

const recursivelyCreateOrgChart = (
  employeeHierarchicalData: EmployeeHierarchicalData,
  employeeHierarchicalDataByManagerId: EmployeeHierarchicalDataByManagerId,
  addEmployee: (newEmployee: EmployeeHierarchicalData) => void,
): ReactNode => {
  if (
    employeeHierarchicalDataByManagerId[employeeHierarchicalData.id] &&
    employeeHierarchicalDataByManagerId[employeeHierarchicalData.id].length > 0
  ) {
    const childNodeLeafs = employeeHierarchicalDataByManagerId[employeeHierarchicalData.id].map(
      (data) => {
        return recursivelyCreateOrgChart(data, employeeHierarchicalDataByManagerId, addEmployee);
      },
    );
    appendAddEmployeeBtnToTreeBrand(childNodeLeafs, employeeHierarchicalData, addEmployee);

    // if we do not have a manager then we are the root of the tree
    return employeeHierarchicalData.manager ? (
      <TreeNode
        key={employeeHierarchicalData.id}
        label={<EmployeeAccording employeeHierarchicalData={employeeHierarchicalData} />}
      >
        {childNodeLeafs}
      </TreeNode>
    ) : (
      <Tree
        key={employeeHierarchicalData.id}
        label={<EmployeeAccording employeeHierarchicalData={employeeHierarchicalData} />}
      >
        {childNodeLeafs}
      </Tree>
    );
  } else {
    return (
      <TreeNode
        key={employeeHierarchicalData.id}
        label={<EmployeeAccording employeeHierarchicalData={employeeHierarchicalData} />}
      >
        <TreeNode
          key={`${employeeHierarchicalData.id}-new-add-btn`}
          label={
            <AddEmployeeBtn managerId={employeeHierarchicalData.id} addEmployee={addEmployee} />
          }
        />
      </TreeNode>
    );
  }
};

/**
 * displays the Org Chart
 */
export const EmployeeHierarchical: FC<EmployeeHierarchicalType> = (props) => {
  const rawEmployeeData = useEmployeeData();
  const formattedData = useFormateEmployeeData(rawEmployeeData.data);
  const rootNodes = formattedData.employeeHierarchicalDataByManagerId[NO_DIRECT_MANAGER];
  if (!rootNodes) {
    return null;
  }

  return (
    <Box maxW={'90vw'}>
      {rootNodes.map((rootNode) => {
        return recursivelyCreateOrgChart(
          rootNode,
          formattedData.employeeHierarchicalDataByManagerId,
          rawEmployeeData.addEmployee,
        );
      })}
    </Box>
  );
};
