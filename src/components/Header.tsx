'use client';
import { useState } from 'react';
import { userinfo } from '@/constant/constant';
import { headerItems } from '@/constant/constant';
import { Navitems } from '@/models/Header';
import { BiMenu } from 'react-icons/bi';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [navitem, showNavitems] = useState<boolean>(false);

  return (
    // <header className="bg-white p-6 fixed top-0 w-full justify-between z-10 md:flex">
    //   <div className="flex justify-between">
    //     <h2 className="text-2xl font-bold">{userinfo.name}</h2>
    //     <BiMenu
    //       size={30}
    //       className="menu-button md:hidden"
    //       onClick={() => showNavitems((prevState) => !prevState)}
    //     />
    //   </div>

    //   {/* Navigation items */}
    //   <div className={`nav-items ${navitem ? 'show' : ''} md:flex md:space-x-6`}>
    //     {Object.keys(headerItems).map((item) => (
    //       <ScrollLink
    //         to={headerItems[item as keyof Navitems].page}
    //         key={headerItems[item as keyof Navitems].label}
    //         className="block md:inline-block cursor-pointer"
    //         spy={true}
    //         smooth={true}
    //       >
    //         {headerItems[item as keyof Navitems].label}
    //       </ScrollLink>
    //     ))}
    //   </div>
    // </header>

    <header className='header'>
    <div className='header__top'>
        <h2 className='header__title'>{userinfo.name}</h2>
        <BiMenu
            size={30}
            className='header__menu-icon'
            onClick={() => showNavitems(prevState => !prevState)}
        />
    </div>
    <div className={`header__nav ${navitem ? 'show' : 'hide'}`}>
        {
            Object.keys(headerItems).map((item) => (
                <ScrollLink
                    to={headerItems[item as keyof Navitems].page}
                    key={headerItems[item as keyof Navitems].label}
                    className='header__nav-link'
                    spy={true}
                    smooth={true}
                >
                    {headerItems[item as keyof Navitems].label}
                </ScrollLink>
            ))
        }
    </div>
</header>

  );
}
