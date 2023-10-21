import CardBox from '../../components/Card/Box/CardBox'
import Title from '../../components/Title/Title'
import './Education.css'

export default function Education() {
  const educations = [
    {
      name: 'University Jember',
      major: 'Information Technology',
      years: '2018-2023'
    },
    {
      name: 'SMAN 3 Probolinggo',
      major: 'Science',
      years: '2016-2018'
    }
  ]
  return (
    <section className="education section">
      <Title value="My Education" />
      <div className="education__content">
        {
          educations.map((education, index) => (
            <CardBox key={index} name={education.name} major={education.major} years={education.years} />
          ))
        }
      </div>
    </section>
  )
}
