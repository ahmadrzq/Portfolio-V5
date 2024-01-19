import CardBox from '../../components/Card/Box/CardBox'
import Title from '../../components/Title/Title'
import './Education.css'
import { useSelector } from 'react-redux'

export default function Education() {
    const educations = useSelector(state => state.data.education);
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
