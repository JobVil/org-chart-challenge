import { createContext, FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const CustomRouterContext = createContext<{
  navigateHome: () => void;
  navigateToEmployee: (id: string) => void;
}>({ navigateHome: () => null, navigateToEmployee: (id: string) => null });

type CustomRouterProviderProps = {};

export const CustomRouterProvider: FC<CustomRouterProviderProps> = (props) => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };
  const navigateToEmployee = (id: string) => {
    navigate(`/employee/${id}`);
  };

  return (
    <CustomRouterContext.Provider value={{ navigateHome, navigateToEmployee }}>
      {props.children}
    </CustomRouterContext.Provider>
  );
};
