import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PrintName from './PrintNames.jsx';
import UserCard from './UserInfo.jsx';
import Counter from './counter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrintName /> 
    <UserCard />
    <Counter />
  </StrictMode>
);
