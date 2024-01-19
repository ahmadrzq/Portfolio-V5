import { useSelector } from 'react-redux';
import Title from '../../components/Title/Title'
import './Skill.css'

export default function Skills() {
    const skills = useSelector(state => state.data.skills);

    return (
        <section className="skills section">
            <Title value="My Skills" />
            <div className="skills__content">
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
