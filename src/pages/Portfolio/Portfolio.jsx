import CardPortfolio from '../../components/Card/Portfolio/CardPortfolio'
import Title from '../../components/Title/Title'
import './Portfolio.css'
import { useSelector } from 'react-redux';

export default function Portfolio() {
    const portfolios = useSelector(state => state.data.projects);
    return (
        <section className="portfolio section">
            <Title value="My Portfolio" />
            <div className="portfolio__content">
                {
                    portfolios && portfolios.map((item, index) => (
                        <CardPortfolio key={index}
                            image={item.thumbnail}
                            to={item.url}
                            category={item.category}
                            name={item.name}
                            tech={item.stack}
                        />
                    ))
                }
            </div>
        </section >
    )
}
