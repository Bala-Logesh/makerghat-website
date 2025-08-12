import { Link } from 'react-router'
import logo from '../assets/logo.png'
import '../styles/footer.css'

function Footer() {
  return (
    <footer>
      <div className="col col1">
        <h1>Connect<br></br>with Us</h1>

        <Link to="/" className="link">About Us</Link>
        <Link to="/" className="link">Contact Us</Link>
      </div>
      <div className="col col2">
        <h2>Resources</h2>

        <Link to="/" className="link">Blueprint to our Makerspaces</Link>
        <Link to="/" className="link">IGNITE Incubator Program</Link>
        <Link to="/" className="link">Curriculum Resources</Link>
        <Link to="/" className="link">Dashboard</Link>
        <Link to="/" className="link">Reports</Link>
      </div>
      <div className="col col3">
        <h2>FAQs</h2>

        <Link to="/" className="link">Experiment</Link>
        <Link to="/" className="link">Explore</Link>
        <Link to="/" className="link">Empower</Link>
        <Link to="/" className="link">Evaluate</Link>
      </div>
      <div className="col col4">
        <img src={logo} alt="Logo" />

        <p>Subscribe to our newsletter</p>
        <input type="text" placeholder='Email' />

        <div className="line"></div>

        <ul className="social">
          <li>I</li>
          <li>Y</li>
          <li>X</li>
          <li>L</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer