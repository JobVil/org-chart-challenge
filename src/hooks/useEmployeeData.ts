import { useState } from "react";
import DEFAULT_EMPLOYEES_DATA from "../data/employees";
import { LOCAL_STORAGE_KEY } from "../utils/constants"
import { EmployeeHierarchicalData } from "../utils/types";


export const useEmployeeData = () => {
  const dataFromLocalStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY) as unknown as EmployeeHierarchicalData[] | undefined;
  const [employeesData, setEmployeesData] = useState<EmployeeHierarchicalData[]>(dataFromLocalStorage || DEFAULT_EMPLOYEES_DATA);

  const setDataWrapper = (newData:EmployeeHierarchicalData[]) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_EMPLOYEES_DATA));
    setEmployeesData(newData);
  }

  const addEmployee = (newEmployee:EmployeeHierarchicalData) => {
    const newData = [...employeesData, newEmployee];
    setDataWrapper(newData);
  }

  const removeEmployee = (id:string) => {
    const newEmployeeData = employeesData.filter(employeeData => employeeData.id !== id);
    setDataWrapper(newEmployeeData);
  }

  return {data: employeesData , setDataWrapper, addEmployee, removeEmployee}
}