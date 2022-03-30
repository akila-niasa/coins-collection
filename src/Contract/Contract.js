import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import BdAddress from './BdAddress';
import UkAdress from './UkAdress';

const Contract = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className=' font-mono text-xl text-center md:text-3xl '>
            Contact Us, Our Office Address Down Below
          </h1>
  
          <div className='flex justify-center items-center'>
            <Link
              to='bdAddress'
              className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'
            >
              BD Address
            </Link>
            <Link
              to='ukAddress'
              className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'
            >
              Uk Address
            </Link>
          </div>
          <div className='flex justify-center items-center w-full py-44'>
            <Outlet />
          </div>
        </div>
      </section>

    );
};

export default Contract;