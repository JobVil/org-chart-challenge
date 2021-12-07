import { Children, useEffect, useState } from "react";
import { NO_DIRECT_MANAGER } from "../utils/constants";
import { EmployeeHierarchicalData, EmployeeHierarchicalDataByEmployeeId, EmployeeHierarchicalDataByManagerId, EmployeeHierarchicalDataFormatted, EmployeeHierarchicalTreeNodes, OrderedManagerIdsByEmployee } from "../utils/types";

const recursiveAddChildren = (
  employeeHierarchicalData:EmployeeHierarchicalData,
  employeeHierarchicalDataByManagerId: EmployeeHierarchicalDataByManagerId
  ):EmployeeHierarchicalTreeNodes => {
    // checkout if we have a child
    // div into the child and add its child
    // re
    if(employeeHierarchicalDataByManagerId[employeeHierarchicalData.id] && employeeHierarchicalDataByManagerId[employeeHierarchicalData.id].length > 0) {
      const test = employeeHierarchicalDataByManagerId[employeeHierarchicalData.id].map(data => {return recursiveAddChildren(data, employeeHierarchicalDataByManagerId)});
      return {...employeeHierarchicalData, ...{children: test} };
    } else {
      return employeeHierarchicalData;
    }
}

const restructureData = (employeeHierarchicalData: EmployeeHierarchicalData[]):EmployeeHierarchicalDataFormatted => {
  const employeeHierarchicalDataByManagerId:EmployeeHierarchicalDataByManagerId = {};
  const orderedManagerIdsByEmployee:OrderedManagerIdsByEmployee = {};
  const employeeHierarchicalDataByEmployeeId:EmployeeHierarchicalDataByEmployeeId = {};
  const employeeHierarchicalTreeNodes:EmployeeHierarchicalTreeNodes[] = [];

  employeeHierarchicalData.forEach(data => {
    const managerId = data.manager || NO_DIRECT_MANAGER;
    if(!employeeHierarchicalDataByManagerId[managerId]){
      employeeHierarchicalDataByManagerId[managerId] = [];
    }
    employeeHierarchicalDataByManagerId[managerId].push(data);
    orderedManagerIdsByEmployee[data.id] = [];
    employeeHierarchicalDataByEmployeeId[data.id] = data;
  });

  employeeHierarchicalData.forEach(data => {
    let manager = data.manager;
    while(manager) {
      const managerData = employeeHierarchicalDataByEmployeeId[manager];
      orderedManagerIdsByEmployee[data.id].push(manager);
      manager = managerData.manager;
    }
  });

  employeeHierarchicalDataByManagerId[NO_DIRECT_MANAGER].forEach(treeRoot => {
    employeeHierarchicalTreeNodes.push(recursiveAddChildren(treeRoot, employeeHierarchicalDataByManagerId));
  })

  return {employeeHierarchicalDataByManagerId, orderedManagerIdsByEmployee, employeeHierarchicalDataByEmployeeId, employeeHierarchicalTreeNodes}
}

// flatten data & expose methods for adding or removing user form data
export const useFormateEmployeeData = (initialData: EmployeeHierarchicalData[]) => {
  const [ formattedData, setFormattedData ] = useState<EmployeeHierarchicalDataFormatted>(restructureData(initialData));
  useEffect(() => {
    setFormattedData(restructureData(initialData));
  }, [initialData, initialData.length])

  return formattedData;
};

