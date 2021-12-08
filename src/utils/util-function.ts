import { EmployeeHierarchicalData } from "./types"

/**
 * Take in an employee and returns a string of firstName, lastName
 */
export const getEmployeeName = (employee: EmployeeHierarchicalData) => (`${employee.firstName}, ${employee.lastName}`);