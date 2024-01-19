import Button from '../../components/Button/Button'
import './Home.css'
import me from '/image/me.png'

export default function Home() {
    return (
        <section className="homepage">
            <div className="home__img">
                <img className="home__img-img" src={me} alt="" />
            </div>
            <div className="home__content">
                <h2>Welcome to my Website</h2>
                <h1>
                    I'm <span className="home__content-name">Ahmad Rizqi Isnain</span>
                </h1>
                <h4>
                    A <span className="home__content-name">Web Developer</span>, Building
                    Your Web Dreams.
                </h4>
            </div>
            <div className="home__btn">
                <Button to={"/portfolio"} value={"My Portfolio"} />
            </div>
        </section>
    )
}
