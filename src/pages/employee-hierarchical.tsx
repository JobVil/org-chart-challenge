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

const recursiveAddChildren = (
  employeeHierarchicalData: EmployeeHierarchicalData,
  employeeHierarchicalDataByManagerId: EmployeeHierarchicalDataByManagerId,
  addEmployee: (newEmployee: EmployeeHierarchicalData) => void,
): ReactNode => {
  if (
    employeeHierarchicalDataByManagerId[employeeHierarchicalData.id] &&
    employeeHierarchicalDataByManagerId[employeeHierarchicalData.id].length > 0
  ) {
    const test = employeeHierarchicalDataByManagerId[employeeHierarchicalData.id].map((data) => {
      return recursiveAddChildren(data, employeeHierarchicalDataByManagerId, addEmployee);
    });
    test.push(
      <TreeNode
        key={`${employeeHierarchicalData.id}-new-add-btn`}
        label={<AddEmployeeBtn managerId={employeeHierarchicalData.id} addEmployee={addEmployee} />}
      />,
    );
    return employeeHierarchicalData.manager ? (
      <TreeNode
        key={employeeHierarchicalData.id}
        label={<EmployeeAccording employeeHierarchicalData={employeeHierarchicalData} />}
      >
        {test}
      </TreeNode>
    ) : (
      <Tree
        key={employeeHierarchicalData.id}
        label={<EmployeeAccording employeeHierarchicalData={employeeHierarchicalData} />}
      >
        {test}
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
        return recursiveAddChildren(
          rootNode,
          formattedData.employeeHierarchicalDataByManagerId,
          rawEmployeeData.addEmployee,
        );
      })}
    </Box>
  );
};
