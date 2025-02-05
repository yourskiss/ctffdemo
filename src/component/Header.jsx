import { useState } from 'react';
import headerdata  from '../assets/data/header.json';
import { NavLink } from 'react-router-dom';

import weblogo from "./../assets/images/logo.svg"
import mobilelogo from "./../assets/images/LogoSmall.svg"
import Menu from "./../assets/images/Menu.svg"

export default function Header() {
  const[mobilemenu, setMobilemenu] = useState(false);
  const showHideHandler = () => {
    setMobilemenu(!mobilemenu);
  }
  return (
    <header className="w-full bg-neutral-5 flex justify-center">
         <div className="w-full max-w-[1024px] px-16 lg:px-0 py-8 flex justify-between items-center relative">
            <aside className="">
                <img src={weblogo} alt="logo" className="hidden lg:block" />
                <img src={mobilelogo} alt="logo" className="block lg:hidden" />
            </aside>
            <ul className="hidden lg:flex justify-end items-center gap-40">
                {headerdata.map((item) => (
                    <li key={item.id} className='body-default '>
                    <NavLink to={item.url} onClick={showHideHandler} className={({ isActive }) => isActive ? 'pb-4 text-neutral-90 border-b-2 border-neutral-90' : 'pb-4 text-neutral-90 border-b-2 border-transparent'}>{item.label}</NavLink>
                    </li>
                ))}
                </ul>
            <div className="block lg:hidden">
                <img src={Menu} onClick={showHideHandler} alt="menu" className="cursor-pointer" />
                { mobilemenu && <ul className="w-full flex justify-start items-center flex-col z-50 absolute right-0 top-[100%] bg-neutral-10 p-4">
                    {headerdata.map((item) => (
                        <li key={item.id} className='px-4 py-8 body-default '>
                            <NavLink to={item.url} onClick={showHideHandler} className={({ isActive }) => isActive ? 'pb-4 text-neutral-90 border-b-2 border-neutral-90' : 'pb-4 text-neutral-90 border-b-2 border-transparent'}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul> } 
            </div>
         </div>
    </header>
  )
}
