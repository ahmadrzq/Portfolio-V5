import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact section">
      <Title value="Contact Me" />
      <div className="contact__content">
        <div className="contact__details">
          <div className="contact__item">
            <div>
              <h3 >Call</h3>
              <span className="contact__data">+6282235955586</span>
            </div>
          </div>

          <div className="contact__item">
            <div>
              <h3 >Email</h3>
              <span className="contact__data">ahmadrizqiisnain@gmail.com</span>
            </div>
          </div>

          <div className="contact__item">
            <div>
              <h3 >Address</h3>
              <span className="contact__data">Jl. Raya Kuripan, Karanganyar, Bantaran, Probolinggo, Jawa
                Timur, Indonesia</span>
            </div>
          </div>
        </div>

        <form action="" className="contact__form">
          <div className="form__group">
            <div className="form__input">
              <input type="text" placeholder="Name" className="input__control" />
            </div>
            <div className="form__input">
              <input type="text" placeholder="Email" className="input__control" />
            </div>
          </div>
          <div className="form__input">
            <input type="text" placeholder="Subject" className="input__control" />
          </div>
          <div className="form__input">
            <textarea name="" id="" placeholder="Message" cols="30" rows="10"
              className="input__control textarea"></textarea>
          </div>
          <Button value="Send Message" />
        </form>
      </div>
    </section >
  )
}
