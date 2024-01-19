import CardBox from '../../components/Card/Box/CardBox'
import Title from '../../components/Title/Title'
import './Experience.css'
import { useSelector } from 'react-redux';

export default function Experience() {
    const experiences = useSelector(state => state.data.experience);
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
