import { Link } from 'react-router-dom'
import './CardPortfolio.css'
import SVGBox from './SVGBox'

export default function CardPortfolio({ image, to, category, name, tech }) {
    return (
        <Link to={to} target="_blank">
            <div className="portfolio__card">
                <img src={image} alt="" className="portfolio__img" />
                <div className="portfolio__details">
                    <h3 className="portfolio__text">{category}</h3>
                    <span className="portfolio__description">{name}</span>
                    <div className="tech">
                        {tech.map((svg, index) => (
                            <SVGBox key={index} svg={svg} />
                        ))}
                    </div>

                </div>
            </div>
        </Link>
    )
}
