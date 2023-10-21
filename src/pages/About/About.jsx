import { Link } from 'react-router-dom'
import Title from '../../components/Title/Title'
import './About.css'
import linkedin from '/image/Linkedin.png'
import github from '/image/Github.png'
import instagram from '/image/Instagram.png'
import twitter from '/image/Twitter.png'

export default function About() {
    return (
        <section className="about section">
            <Title value="About Me" />
            <div className="about__content">
                <p className="bshadow">
                    Enthusiastic and dedicated Junior Web Developer with a strong
                    foundation in HTML, CSS, and JavaScript, and a growing expertise in
                    React for front-end development and Express.js for back-end
                    development. Proficient in creating dynamic and user-friendly
                    websites and web applications. Experienced in Laravel and have
                    successfully completed individual projects. Committed to expanding
                    knowledge and contributing to innovative web projects. Eager to
                    collaborate with experienced professionals and further advance my
                    skills in web development.
                </p>

                <div className="socials bshadow">
                    <Link to="https://www.linkedin.com/in/ahmad-rizqi-isnain/" target="_blank"
                    ><img src={linkedin} alt=""
                        /></Link>
                    <Link to="https://github.com/ahmadrzq" target="_blank"
                    ><img src={github} alt=""
                        /></Link>
                    <Link to="https://www.instagram.com/ahmadrizqiisnain/" target="_blank"
                    ><img src={instagram} alt=""
                        /></Link>
                    <Link to="https://twitter.com/ahmrizn" target="_blank"
                    ><img src={twitter} alt=""
                        /></Link>
                </div>
            </div>
        </section>
    )
}
