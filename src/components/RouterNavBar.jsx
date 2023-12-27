import '../App.css'
import { Link } from 'react-router-dom'

export default function RouterNavBar() {
    return (
        <nav className="router-nav">
            <ul>
                <li>
                    <Link to="/">Web</Link>
                </li>
                <li>
                    <Link to="/2">Games</Link>
                </li>
            </ul>
        </nav>
    )
}