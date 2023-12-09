import './CardBox.css'

export default function CardBox({ name, major, years, company, entryYear, graduationYear }) {
    return (
        <div className="education__card">
            <h4>{name}</h4>
            <div>
                <h2>{major ? major : company}</h2>
                <h3>{entryYear} - {graduationYear}</h3>
            </div>
        </div>
    )
}
