import { Link } from 'react-router'
import logo from '../assets/logo.png'

function Header() {
  return (
    <nav className='flex-jcsb-aic mb20'>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <ul className='flex-jcsb-aic gap-40'>
        <li><Link to="/" className='link'>Experiment</Link></li>
        <li><Link to="/" className='link'>Explore</Link></li>
        <li><Link to="/" className='link'>Empower</Link></li>
        <li><Link to="/" className='link'>Evaluate</Link></li>
        <li><Link to="/" className='link'>Collaborate</Link></li>
      </ul>
    </nav>
  )
}

export default Header