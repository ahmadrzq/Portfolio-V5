import CardBox from '../../components/Card/Box/CardBox'
import Title from '../../components/Title/Title'
import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      name: 'Freelance Web Developer',
      company: 'Work From Anywhere',
      years: '2023 - Now'
    },
    {
      name: 'Project-Based Intern : Fullstack Developer Virtual Internship Experience Investree',
      company: 'Investree',
      years: 'June 2022 - July 2022'
    }
  ]
  return (
    <section className="experience section">
      <Title value="My Experience" />
      <div className="experience__content">
        {
          experiences.map((experience, index) => (
            <CardBox key={index} name={experience.name} company={experience.company} years={experience.years} />))
        }
      </div>
    </section >
  )
}
