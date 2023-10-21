import { Link } from 'react-router-dom'
import './CardPost.css'

export default function CardPost({ image, title, date, description, category }) {
    return (
        <div className="card__post bshadow">
            <div className="card__post-img">
                <img src={image} alt="" />
            </div>
            <div className="card__post-content">
                <div className="title__post">
                    <Link to="#"
                    ><h2>
                            {title}
                        </h2></Link>
                    <h5>{date}</h5>
                    <h4>{category}</h4>
                </div>
                <div className="description__post">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
