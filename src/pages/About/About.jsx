import { Link } from 'react-router-dom'
import Title from '../../components/Title/Title'
import './About.css'
import { useEffect, useState } from 'react'
import { getLinks, getUser } from '../../services/api'

export default function About() {
    const [description, setDescription] = useState('')
    const [links, setLinks] = useState([])

    useEffect(() => {
        getUser().then((res) => {
            setDescription(res.description)
        })
    }, [])

    useEffect(() => {
        getLinks().then((res) => {
            setLinks(res)
        })
    }, [])

    return (
        <section className="about section">
            <Title value="About Me" />
            <div className="about__content">
                <p className="bshadow">
                    {description}
                </p>
                <div className="socials bshadow">
                    {links.map((link, index) => (
                        <Link to={link.url} target="_blank" key={index}>
                            <img src={link.image} alt="" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
