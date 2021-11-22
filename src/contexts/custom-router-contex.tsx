import { createContext } from 'react';

export const CustomRouterContext = createContext({});

export const CustomRouterProvider = (props) => {
  return (
    <CustomRouterContext.Provider value={{ temp: '' }}>
      {props.children}
    </CustomRouterContext.Provider>
  );
};
