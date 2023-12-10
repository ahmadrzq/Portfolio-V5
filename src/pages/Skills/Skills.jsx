import { useState } from 'react'
import Title from '../../components/Title/Title'
import './Skill.css'
import { useEffect } from 'react'
import { getSkills } from '../../services/api'

export default function Skills() {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        getSkills().then(res => {
            setSkills(res)
        })
    }, [])

    return (
        <section class="skills section">
            <Title value="My Skills" />
            <div class="skills__content">
                {skills.map((skill, index) => (
                    <div className="card__skill bshadow" key={index}>
                        <img src={skill.svg} alt="" className='w-50' />
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}
