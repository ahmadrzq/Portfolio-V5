import { useState } from 'react'
import CardBox from '../../components/Card/Box/CardBox'
import Title from '../../components/Title/Title'
import { getEducation } from '../../services/api'
import './Education.css'
import { useEffect } from 'react'

export default function Education() {
    const [educations, setEducations] = useState([])

    useEffect(() => {
        getEducation().then((res) => {
            setEducations(res)
        })
    })
    return (
        <section className="education section">
            <Title value="My Education" />
            <div className="education__content">
                {
                    educations.map((education, index) => (
                        <CardBox key={index} name={education.school} major={education.major} entryYear={education.entryYear} graduationYear={education.graduationYear} />
                    ))
                }
            </div>
        </section>
    )
}
