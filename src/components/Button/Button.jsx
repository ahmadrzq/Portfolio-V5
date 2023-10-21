import { Link } from "react-router-dom"
import "./Button.css"

export default function Button({ to, value }) {
  return (
    <Link to={to} className="btn__default-light"
    >{value}
    </Link>
  )
}