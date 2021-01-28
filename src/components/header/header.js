import './header.css';
import logomain from '../../img/logomain.svg';
import user from '../../img/user.svg';
import shop from '../../img/shop.svg';

import Button from '../button/button'

const Header = () => {
    return(
        <header className="header">
            		<a href="!#" className="jump">
					    <img src={logomain} alt="Logo" className="logo"/>
				    </a>
                    <input className="input input-adress" placeholder="Адрес Доставки"></input>
				<div className="buttons">
					<Button text="Войти" btnClass='button-primary' imgClass='button-image' scr={'user'}/>
					<Button text="Корзина" btnClass='button-cash' imgClass='button-icon' scr={'shop'}/>

				</div>	
        </header>
    )
};
export default Header;