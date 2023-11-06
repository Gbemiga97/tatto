import { useEffect, useState } from "react"
import { data } from "../utils"
import { TiThMenuOutline } from 'react-icons/ti'
import { Nav, NavMobile, Socials } from "../components"
import { Link } from "react-scroll"

const Header = () => {

  const {logo} = data.headerData

  const [bg, setBg] = useState(false)

  const [showNav, setShowNav] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header className={`${bg ? ' h-[100px] lg:h-[110px] shadow-lg ' : 'h-[120px] lg:h-[150px]'}
    fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center h-full pl-[50px] pr-[60px]">

        <Link 
        to="/"
        spy={true}
        onClick={() => setShowNav(false)}
        className="cursor-pointer"
        >
          <img
          className="w-[188px] h-[90px]"
          src={logo} 
          alt="logo" />
        </Link>

        <div className="hidden lg:flex">
          <Nav />
        </div>

        <button 
        onClick={() => setShowNav(prev => !prev)}
        className="xl:hidden text-3xl absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer">
          <TiThMenuOutline />
        </button>

        <div className={`${showNav ? 'max-h-full' : 'max-h-0'} ${bg ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'}
          bg-white fixed w-full h-full left-0 -z-10 transition-all duration-300`}>
          <NavMobile setShowNav={setShowNav} />
        </div>


        <div className="hidden lg:flex">
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header