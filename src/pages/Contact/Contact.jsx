import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import './Contact.css'
import { getUser } from '../../services/api'
import { Link } from 'react-router-dom'

export default function Contact() {
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        getUser().then(res => {
            setPhone(res.phone)
            setEmail(res.email)
            setAddress(res.address)
        }
        )
    }, [])
    return (
        <section className="contact section">
            <Title value="Contact Me" />
            <div className="contact__content">
                <div className="contact__details">
                    <div className="contact__item">
                        <div>
                            <h3 >Call</h3>
                            <Link to={"https://wa.me/6282235955586"}><span className="contact__data">+6282235955586</span></Link>
                        </div>
                    </div>

                    <div className="contact__item">
                        <div>
                            <h3 >Email</h3>
                            <Link to={"mailto:ahmadrizqiisnain@gmail.com"}><span className="contact__data">{email}</span></Link>
                        </div>
                    </div>

                    <div className="contact__item">
                        <div>
                            <h3 >Address</h3>
                            <span className="contact__data">{address}</span>
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
