import Logo from '../../assets/img/svg/logo.svg'
import World from '../../assets/img/svg/icon-world.svg'
import Light from '../../assets/img/svg/ligh-mode.svg'
import Burger from '../../assets/img/svg/icon-burger.svg'
import Xmark from '../../assets/img/svg/icon-xmark.svg'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { ButtonIcon } from '../Buttons/ButtonIcon'
import { useState } from 'react'
import AboutMe from '../../pages/AboutMe'

const Nav = () => {
  const [menu, setMenu] = useState(true)

  const switchMenu = () => {
    setMenu(!menu)
  }
  return (
    <div className="p-4 flex justify-between items-center max-w-screen-2xl m-auto h-16">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo DDDesign" />
        </Link>
      </div>

      <nav>
        <ul
          className={`${
            menu ? '-translate-x-full' : ' lg:translate-x-0'
          } lg:translate-x-0 z-20 bg-goldenLion-400 h-screen left-0 pl-4 pt-10 w-full gap-10 flex flex-col top-0 absolute lg:w-auto lg:static lg:flex-row lg:gap-6 text-lg lg:p-0 lg:h-auto lg:bg-inherit font-mont font-medium`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-goldenLion-400 font-bold' : null
            }>
            Inicio
          </NavLink>

          <NavLink
            to="/acercademi"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-goldenLion-400 font-bold' : null
            }>
            Acerca de mí
          </NavLink>

          <NavLink
            to="/habilidades"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-goldenLion-400 font-bold' : null
            }>
            Habilidades
          </NavLink>

          <NavLink
            to="/projectos"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-goldenLion-400 font-bold' : null
            }>
            Portafolio
          </NavLink>

          {/* <Link>Contacto</Link> */}
        </ul>
      </nav>

      <div className="relative">
        <div
          className={`${
            menu ? '-z-20' : 'z-20'
          } bottom-0 pb-4 gap-6 absolute  flex lg:z-0 lg:static lg:p-0 `}>
          <div className=" cursor-pointer">
            <ButtonIcon
              src={World}
              alt="Button World"
              className="bg-emptiness rounded-full border-blackOut "
            />
          </div>

          <div className="cursor-pointer">
            <ButtonIcon
              src={Light}
              alt="Button Light"
              className="bg-emptiness rounded-full border-blackOut "
            />
          </div>
        </div>
      </div>

      {menu ? (
        <div onClick={switchMenu} className="cursor-pointer lg:hidden ">
          <ButtonIcon
            src={Burger}
            alt="Menu de hamburgesa"
            className="  border-blackOut border-2 shadow-buttonsSocial p-1 transition hover:translate-y-[2px] hover:shadow-none active:shadow-buttonsSocial"
          />
        </div>
      ) : (
        <div
          onClick={switchMenu}
          className={`${
            !menu ? 'cursor-pointer relative z-20 lg:hidden' : ''
          }`}>
          <ButtonIcon
            className="w-8  border-blackOut border-2 shadow-buttonsSocial p-1 transition hover:translate-y-[2px] hover:shadow-none active:shadow-buttonsSocial"
            src={Xmark}
            alt="Cerrar menu"
          />
        </div>
      )}
    </div>
  )
}

export default Nav
