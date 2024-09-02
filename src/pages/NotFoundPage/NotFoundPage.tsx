import './NotFound.css'
import BackgroundImg from '../../assets/Images/notfoundBg.png'
function NotFoundPage() {
    return (
        <div className="container not__found__container">
            <img src={BackgroundImg} alt="Not Found img" />
        </div>
    )
}

export default NotFoundPage