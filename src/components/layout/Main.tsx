import { Outlet } from 'react-router-dom';
const Main = () => {
  return (
    <main className="flex-1 bg-gray-100 p-4">
      <Outlet />
    </main>
  );
};

export default Main;
