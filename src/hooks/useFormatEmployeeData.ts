import { useEffect, useState } from "react";
import { NO_DIRECT_MANAGER } from "../utils/constants";
import { EmployeeHierarchicalData, EmployeeHierarchicalDataByEmployeeId, EmployeeHierarchicalDataByManagerId, EmployeeHierarchicalDataFormatted, OrderedManagerIdsByEmployeeId } from "../utils/types";

/**
 * Formatting employee data into linked nodes. We do this by creating three object that combined allows of to traverse the tree
 * forwards and backwards. I decided to do it this way because
 * 
 * 1) Breaking the logic up into separate chucks improve readability and you can clearly understand what each chuck looks like and how it is formatted.
 * 2) With them broken up we are open to grow their scope. If you just made one linked tree then if you wanted any data (like all of x persons manager)
 *     you would have to traverse the tree again every time. While dealing with pointer issues every time we added or removed data.
 * 3) Data is cheap computation isn't so have more data duplicated is better.
 * 4) I wanted to keep the stored data clean and simple to add, remove, & edit so I chose to map the structure here instead on storing these as they change.
 * 
 * Note: That this an assumption was made that view the org chart would happen more often then adding, removing or editing. If that 
 * turns out not to be the case, or if the data gets large, we should store more data opposed to recalculating it.
 */
const formateData = (employeeHierarchicalData: EmployeeHierarchicalData[]):EmployeeHierarchicalDataFormatted => {
  // Data expected formats
  const employeeHierarchicalDataByManagerId:EmployeeHierarchicalDataByManagerId = {};
  const orderedManagerIdsByEmployeeId:OrderedManagerIdsByEmployeeId = {};
  const employeeHierarchicalDataByEmployeeId:EmployeeHierarchicalDataByEmployeeId = {};

  // sanity check
  if(!employeeHierarchicalData){
    return {employeeHierarchicalDataByManagerId, orderedManagerIdsByEmployeeId, employeeHierarchicalDataByEmployeeId};
  }

  // creating a list of employee keyed by there managers Id, and their own ids
  employeeHierarchicalData.forEach(data => {
    const managerId = data.manager || NO_DIRECT_MANAGER;
    if(!employeeHierarchicalDataByManagerId[managerId]){
      employeeHierarchicalDataByManagerId[managerId] = [];
    }
    employeeHierarchicalDataByManagerId[managerId].push(data);
    orderedManagerIdsByEmployeeId[data.id] = [];
    employeeHierarchicalDataByEmployeeId[data.id] = data;
  });

  // created an ordered list of an employee managers so given an employee we know all of there mangers
  employeeHierarchicalData.forEach(data => {
    let manager = data.manager;
    while(manager) {
      const managerData = employeeHierarchicalDataByEmployeeId[manager];
      orderedManagerIdsByEmployeeId[data.id].push(manager);
      manager = managerData?.manager;
    }
  });


  return {employeeHierarchicalDataByManagerId, orderedManagerIdsByEmployeeId, employeeHierarchicalDataByEmployeeId}
}

// flatten data & expose methods for adding or removing user form data
export const useFormateEmployeeData = (initialData: EmployeeHierarchicalData[]) => {
  const [ formattedData, setFormattedData ] = useState<EmployeeHierarchicalDataFormatted>(formateData(initialData));
  useEffect(() => {
    setFormattedData(formateData(initialData));
  }, [initialData, initialData.length])

  return formattedData;
};

