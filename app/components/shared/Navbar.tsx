"use client";
import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/app/redux/store/hooks';

const Navbar: React.FC = () => {
  const wishlist = useAppSelector((state) => state.recipes.wishlist);

  const navLinks =
    <ul className='flex justify-center items-center gap-3 font-bold text-lg'>
      <li className='border rounded-md'>
        <input type="text" placeholder='Search here' />
      </li>
      <li>
        <Link href="/wishList">
          ❤️ Wishlist ({wishlist.length})
        </Link>
      </li>
    </ul>

  return (
    <div className="navbar bg-base-100 px-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost text-3xl font-bold">Recipe_Wishlist</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;