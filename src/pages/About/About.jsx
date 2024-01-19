import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Title from '../../components/Title/Title'
import './About.css'

export default function About() {
    const user = useSelector(state => state.data.user);
    const links = useSelector(state => state.data.links);

    return (
        <section className="about section">
            <Title value="About Me" />
            <div className="about__content">
                <p className="bshadow">
                    {user && user.description}
                </p>
                <div className="socials bshadow">
                    {links && links.map((link, index) => (
                        <Link to={link.url} target="_blank" key={index}>
                            <img src={link.image} alt="" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
