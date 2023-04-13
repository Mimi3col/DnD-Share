import { Outlet } from 'react-router-dom';
import App from '../App';

const Layout = () => {
  let id = 0;
  return (
    <div>
      <nav className='flex justify-left space-x-4 m-10'>
        <a
          href='/'
          className='rounded-lg bg-sky-300 text-slate-900 hover:bg-green-300  py-1 px-1 h-10'>
          Player List
        </a>
        {'   '}
        <a
          href='/CreatePlayer'
          className='rounded-lg bg-sky-300 text-slate-900 hover:bg-green-300  py-1 px-1 h-10'>
          Create Player
        </a>
        {'   '}
        <a
          href='/Update'
          className='rounded-lg bg-sky-300 text-slate-900 hover:bg-green-300  py-1 px-1 h-10'>
          Update Player
        </a>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
