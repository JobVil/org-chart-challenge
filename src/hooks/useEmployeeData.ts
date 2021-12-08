import { useCallback, useState } from "react";
import DEFAULT_EMPLOYEES_DATA from "../data/employees";
import { LOCAL_STORAGE_KEY } from "../utils/constants"
import { EmployeeHierarchicalData } from "../utils/types";

/**
 * Client for the employeeData. First we will check if their is data already saved in browser, if so
 * we will grab it, else we will load the default employee data into local storage. The data is then
 * mapped to state, exposing helper function to ensure local storage & state stays synced up.
 * 
 * Since I we do not have a thunk or dataStore this hook can get out of synced if used incorrectly.
 */
export const useEmployeeData = () => {
  const dataFromLocalStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY) as unknown as string | undefined;
  const [employeesData, setEmployeesData] = useState<EmployeeHierarchicalData[]>(dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : DEFAULT_EMPLOYEES_DATA);

  const setDataWrapper = useCallback((newData:EmployeeHierarchicalData[]) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
    setEmployeesData(newData);
  },[]);

  const addEmployee = useCallback((newEmployee:EmployeeHierarchicalData) => {
    const newData = [...employeesData, newEmployee];
    setDataWrapper(newData);
  },[employeesData, setDataWrapper])

  const removeEmployee = useCallback((id:string) => {
    const newEmployeeData = employeesData.filter(employeeData => employeeData.id !== id);
    setDataWrapper(newEmployeeData);
  },[employeesData, setDataWrapper])

  const editEmployee = useCallback((newEmployeeInformation: EmployeeHierarchicalData) => {
    const newEmployeeData = employeesData.map(employeeData => {
      if(employeeData.id === newEmployeeInformation.id){
        return newEmployeeInformation;
      }

      return employeeData;
    });
    setDataWrapper(newEmployeeData);
  },[employeesData, setDataWrapper]);

  return {data: employeesData , setEmployeesData: setDataWrapper, addEmployee, editEmployee, removeEmployee}
}