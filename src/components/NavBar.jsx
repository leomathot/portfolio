import '../App.css'

export default function NavBar() {
    return (
        <nav className="nav">
            <a href="/">home</a>
            <ul>
                <li>
                    <a href="/about">about</a>
                </li>
                <li>
                    <a href="/projects">projects</a>
                </li>
                <li>
                    <a href="/contact">contact</a>
                </li>
            </ul>
        </nav>
    )
}