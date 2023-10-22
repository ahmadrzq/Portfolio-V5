import './SVGBox.css'

export default function SVGBox({ svg }) {
    return (
        <span className="tech__item" dangerouslySetInnerHTML={{ __html: svg }} />
    )
}

