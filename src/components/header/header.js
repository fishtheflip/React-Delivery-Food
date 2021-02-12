import './header.css';
import {Link} from 'react-router-dom'
import Button from '../button/button'

const Header = () => {
    return(
        <header className="header">
            		<Link to="/" className="jump">
					    <img src={'/img/logomain.svg'} alt="Logo" className="logo"/>
				    </Link>
                    <input className="input input-adress" placeholder="Адрес Доставки"></input>
				<div className="buttons">
					<Button text="Войти" btnClass='button-primary' imgClass='button-image' imgLogo='user.svg' path="/shop"/>
					<Button text="Корзина" btnClass='button-cash' imgClass='button-icon' imgLogo='shop.svg' path="/raw"/>

				</div>	
        </header>
    )
};
export default Header;