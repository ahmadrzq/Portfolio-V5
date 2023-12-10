import { useState } from 'react'
import CardBox from '../../components/Card/Box/CardBox'
import Title from '../../components/Title/Title'
import './Experience.css'
import { useEffect } from 'react'
import { getExperience } from '../../services/api'

export default function Experience() {
    const [experiences, setExperiences] = useState([])


    useEffect(() => {
        getExperience().then((res) => {
            setExperiences(res)
        })
    }, [])

    return (
        <section className="experience section">
            <Title value="My Experience" />
            <div className="experience__content">
                {
                    experiences.map((experience, index) => (
                        <CardBox key={index} name={experience.role} company={experience.company} startYear={experience.startYear} endYear={experience.endYear} />))
                }
            </div>
        </section >
    )
}
