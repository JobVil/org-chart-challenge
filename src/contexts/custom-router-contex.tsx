import { createContext, FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const CustomRouterContext = createContext<{
  navigateHome: () => void;
  navigateToEmployee: (id: string) => void;
}>({ navigateHome: () => null, navigateToEmployee: (id: string) => null });

type CustomRouterProviderProps = {};

/**
 * context for to keep track of navigation.
 *
 * Note: This wasn't needed in this context but if you wanted some common logic around navigation/tracking events
 * this context would be useful
 */
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
