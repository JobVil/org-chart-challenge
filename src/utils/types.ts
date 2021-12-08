export type EmployeeHierarchicalData = {
  id: string,
  firstName: string,
  lastName: string,
  company: string,
  email: string,
  phone: string,
  address: string,
  manager: null | string
}

export type EmployeeHierarchicalDataByManagerId = {[key in string]: EmployeeHierarchicalData[]};
export type OrderedManagerIdsByEmployeeId = {[key in string]: string[]};
export type EmployeeHierarchicalDataByEmployeeId = {[key in string]: EmployeeHierarchicalData};
export type EmployeeHierarchicalDataFormatted = {
  employeeHierarchicalDataByManagerId: EmployeeHierarchicalDataByManagerId,
  orderedManagerIdsByEmployeeId: OrderedManagerIdsByEmployeeId,
  employeeHierarchicalDataByEmployeeId:EmployeeHierarchicalDataByEmployeeId,
}