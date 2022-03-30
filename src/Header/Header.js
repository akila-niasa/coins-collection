import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-xl text-gray-600' to='/'>crypo cafe</Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/'>HomePage</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <Link to='/contract'>Contract</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;