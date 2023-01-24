import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav id="navbar">
            <div className="flex-container container">
                <h1 className="logo"> <Link to="/"> UniteToHeal </Link></h1>
                <Link className="nav-links" to='/'>Home</Link>
                <Link className="nav-links" to="/about">About</Link>
                <Link className="nav-links" to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
