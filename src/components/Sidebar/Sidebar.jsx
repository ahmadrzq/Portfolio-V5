import Navigation from './Navigation/Navigation';
import './Sidebar.css';
import img from '/image/forward-btn-2.png';

export default function Sidebar() {
    return (
        <>
            <div class="sidebar">
                <div class="btn__sidebar">
                    <img src={img} alt="" />
                </div>

                <Navigation />
            </div>
        </>
    )
}
