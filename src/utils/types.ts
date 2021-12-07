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
export type EmployeeHierarchicalTreeNodes = EmployeeHierarchicalData & { children?: EmployeeHierarchicalTreeNodes[] }
export type EmployeeHierarchicalDataByManagerId = {[key in string]: EmployeeHierarchicalData[]};
export type OrderedManagerIdsByEmployee = {[key in string]: string[]};
export type EmployeeHierarchicalDataByEmployeeId = {[key in string]: EmployeeHierarchicalData};
export type EmployeeHierarchicalDataFormatted = {
  employeeHierarchicalDataByManagerId: EmployeeHierarchicalDataByManagerId,
  orderedManagerIdsByEmployee: OrderedManagerIdsByEmployee,
  employeeHierarchicalDataByEmployeeId:EmployeeHierarchicalDataByEmployeeId,
  employeeHierarchicalTreeNodes: EmployeeHierarchicalTreeNodes[]
}