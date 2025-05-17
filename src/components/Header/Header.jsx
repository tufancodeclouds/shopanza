import { Link } from 'react-router-dom'
import { FaBars, FaBarsStaggered } from 'react-icons/fa6'
import { TbUserCircle } from 'react-icons/tb'
import { RiUserLine } from 'react-icons/ri'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Navbar } from '../index'
import { useState } from 'react'

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className='max-padd-container w-full mb-2'>
      <div className='flexBetween py-3'>
        <div className='flex justify-start items-center flex-1'>
          <Link to={"/"} className='bold-24 xl:bold-28'>Shopanza</Link>
        </div>

        <div className='flex justify-center items-center flex-1'>
          <Navbar containerStyles={`${menuOpened ? 'flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50' : 'hidden xl:flex gap-x-5 xl:gap-x-7 medium-15 bg-primary ring-1 ring-slate-900/5 rounded-full p-1'}`} onClick={() => setMenuOpened(false)} />
        </div>

        <div className='flex justify-end items-center flex-1 gap-x-2 xs:gap-x-8'>
          <button className='xl:hidden' onClick={() => setMenuOpened(!menuOpened)}>{menuOpened ? <IoClose /> : <FaBars />}</button>
          
          <Link to={"/cart"} className='flex relative'>
            {/* <MdOutlineShoppingCart /> */}
            <div className='ring-1 ring-slate-900 rounded-full px-3 bold-18'>
              Cart
              <span className='bg-secondary text-white text-[12px] font-semibold absolute -top-3.5 -right-2 flexCenter w-4 h-4 rounded-full shadow-md'>0</span>
            </div>
          </Link>

          <div className='group relative'>
            <button className='btn-dark flexCenter gap-x-2'>Login <RiUserLine className='text-xl ' /></button>
          </div>
        </div>
      </div>
    </header>
  ) 
}

export default Header