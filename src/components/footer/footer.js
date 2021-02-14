import './footer.css';
import {Link} from 'react-router-dom'

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <img src="/img/logomain.svg" alt="logo" className="logo footer-logo"/>
                    <nav className="footer">
                        <Link to="/raw" className="footer-link">Ресторанам</Link>
                        <Link to="/raw" className="footer-link">Курьерам</Link>
                        <Link to="/raw" className="footer-link">Пресс-центр</Link>
                        <Link to="/raw" className="footer-link">Контакты</Link>
                    </nav>
                    <div className="social-links">
                        <Link to="/raw" className="social-link"><img src="/img/inst.svg" alt="instagram"/></Link>
                        <Link to="/raw" className="social-link"><img src="/img/face.svg" alt="facebook"/></Link>
                        <Link to="/raw" className="social-link"><img src="/img/vk.svg" alt="vk"/></Link>
                    </div>
                </div>
            </div>
    </footer>
    )
};
export default Footer;