import Link from 'next/link'
import navStylez from '../src/styles/Nav.module.css'



const Nav = () => {
  return (
    <>
   
    <nav className={navStylez.nav}>
    <img alt="logo" />
      <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/locations'>Locations</Link>
        </li>
        <li>
          <Link href='/schedule'>Schedule</Link>
        </li>
        <li>
          <Link href='/investigations'>Investigations</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Nav
