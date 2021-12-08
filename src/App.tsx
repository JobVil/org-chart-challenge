import './App.scss';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router';
import { EmployeeHierarchical } from './pages/employee-hierarchical';
import { Employee } from './pages/employee';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Flex w={'100vw'} h={'100vh'} justifyContent={'center'} alignSelf={'center'}>
          <Flex maxW={'99vw'} justifyContent={'center'} alignSelf={'center'}>
            <Routes>
              <Route path="/employee/:activeEmployeeId" element={<Employee />} />
              <Route path="/" element={<EmployeeHierarchical />}>
                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={null} />
              </Route>
            </Routes>
            {/*  */}
          </Flex>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
