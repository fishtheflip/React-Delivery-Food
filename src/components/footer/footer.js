import './footer.css';
import logomain from '../../img/logomain.svg';
import inst from '../../img/inst.svg';
import face from '../../img/face.svg';
import vk from '../../img/vk.svg';

const Footer = () =>{
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer-block">
                <img src={logomain} alt="logo" className="logo footer-logo"/>
                <nav className="footer">
                    <a href="!#" className="footer-link">Ресторанам</a>
                    <a href="!#" className="footer-link">Курьерам</a>
                    <a href="!#" className="footer-link">Пресс-центр</a>
                    <a href="!#" className="footer-link">Контакты</a>
                </nav>
                <div className="social-links">
                    <a href="!#" className="social-link"><img src={inst} alt="instagram"/></a>
                    <a href="!#" className="social-link"><img src={face} alt="facebook"/></a>
                    <a href="!#" className="social-link"><img src={vk} alt="vk"/></a>
                </div>
            </div>
        </div>
    </footer>
    )
};
export default Footer;