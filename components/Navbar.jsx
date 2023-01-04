import React, {useState, useEffect } from 'react';
import Link from 'next/link';
// import {AiOutlineMenu, AiOutLineClose } from 'react-icons/ai';
import logo from '../public/assets/SpaceJunkRemoval.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('transparent');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('transparent');
      }
    };
    window.addEventListener('scroll, changeColor');
  }, []);

  return (
    <div>
      <div>
        <Link src={ logo } href='/'>
          <h1>Space Junk Removal</h1>
        </Link>
        <ul>
          <li className='p-4 text-[#2192FF]'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 text-[#2192FF]'>
            <Link href='/#services'>Services</Link>
          </li>
          <li className='p-4 text-[#2192FF]'>
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;