import Navigation from './Navigation/Navigation';
import './Sidebar.css';
import img from '/image/forward-btn-2.png';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="btn__sidebar">
                    <img src={img} alt="" />
                </div>

                <Navigation />
            </div>
        </>
    )
}
