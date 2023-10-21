import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
    return (
        <nav class="nav">
            <ul class="nav__list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/skills">Skills</Link></li>
            </ul>
        </nav>
    )
}
