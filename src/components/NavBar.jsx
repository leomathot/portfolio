import '../App.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/">home</Link>
            <ul>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/projects">projects</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
        </nav>
    )
}