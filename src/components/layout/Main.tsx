import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Session from '../users/Session';
const Main = () => {
  return (
    <main className="flex-1 bg-gray-100 p-4">
      <Outlet />
      <Session />
    </main>
  );
};

export default Main;
