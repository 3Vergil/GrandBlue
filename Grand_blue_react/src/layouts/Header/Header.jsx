import { Link, NavLink } from 'react-router'
import './Header.scss'
import { useContext } from 'react'
import { MangaContext } from "@/entities/grandsite"

export default (props) => {
  const { url } = props
  const {userData} = useContext(MangaContext)
 const navItems = [
        {href: '/', label: 'HOME'},
        {href: '/music', label: 'MUSIC'},
        {href: '/wiki', label: 'WIKI'},
        {href: '/manga', label: 'MANGA'},
        {href: userData ? "/profile" : '/Auth', 
          label:  userData ? 'Profile':'Sign_In'},
        
    ]

  return (
    <header className = "header" data-js-overlay-menu="">
            <div className = "header__logo">
                <img src ="/src/shared/assets/images/logo.png" className="header__logo logo" />
                <img src="/src/shared/assets/images/shadow_logo.png" className ="header__logo shadowlogo posab" />
            </div>

            <nav className= "header__navbar">
                <ul className= "header__navbar-buttons">
                  {navItems.map(({href, label}, index) => (
                    <li className="header__navbar-item" key={index}>
                      <NavLink  className='posrel' to={href}>{label}<span className=''></span></NavLink>
                    </li>
                  ))}
                </ul>
            </nav>
    </header>
  )
}
