import '../App.css'
import { Link } from 'react-router-dom'

export default function RouterNavBar() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/page01">home</Link>
                </li>
                <li>
                    <Link to="/page02">about</Link>
                </li>
                <li>
                    <Link to="/page03">projects</Link>
                </li>
                <li>
                    <Link to="/page04">contact</Link>
                </li>
            </ul>
        </nav>
    )
}