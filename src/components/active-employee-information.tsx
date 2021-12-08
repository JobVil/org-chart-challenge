import { Button } from '@chakra-ui/button';
import { FC, useState } from 'react';
import { EmployeeInformationInputs } from '../components/employee-information-inputs';
import { EmployeeHierarchicalData } from '../utils/types';

// page for individual employees clicked
type ActiveEmployeeInformationProps = {
  activeEmployee: EmployeeHierarchicalData;
  editEmployee: (newEmployeeInformation: EmployeeHierarchicalData) => void;
};

/**
 * Controls editing and saving employees information
 */
export const ActiveEmployeeInformation: FC<ActiveEmployeeInformationProps> = ({
  activeEmployee,
  editEmployee,
}) => {
  const [employeeInfo, setEmployeeInfo] = useState<EmployeeHierarchicalData>(activeEmployee);
  const [isEditing, setIsEditing] = useState(false);
  const saveBtn = (
    <Button
      onClick={() => {
        setIsEditing(false);
        editEmployee(employeeInfo);
      }}
    >
      Save
    </Button>
  );
  const editBtn = <Button onClick={() => setIsEditing(true)}>Edit</Button>;
  return (
    <>
      <EmployeeInformationInputs
        setEmployeeInfo={setEmployeeInfo}
        employeeInfo={employeeInfo}
        isReadOnly={!isEditing}
      />

      {isEditing ? saveBtn : editBtn}
    </>
  );
};
