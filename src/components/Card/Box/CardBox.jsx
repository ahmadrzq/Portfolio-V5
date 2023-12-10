import './CardBox.css'

export default function CardBox({ name, major, company, entryYear, graduationYear, startYear, endYear }) {
    return (
        <div className="education__card">
            <h4>{name}</h4>
            <div>
                <h2>{major ? major : company}</h2>
                <h3>{entryYear ? entryYear : startYear} - {graduationYear ? graduationYear : endYear}</h3>
            </div>
        </div>
    )
}
