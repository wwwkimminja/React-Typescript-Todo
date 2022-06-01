import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle=createGlobalStyle`
 body{
    background: #e9ecef;
  }
`;
const App=()=> {

return(
  <>
<GlobalStyle/>
<TodoTemplate>
 <div> 안녕하세요!</div>
</TodoTemplate>
</>
)
} 

export default App;