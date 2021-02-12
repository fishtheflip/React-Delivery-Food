import './header.css';

import Button from '../button/button'

const Header = () => {
    return(
        <header className="header">
            		<a href="!#" className="jump">
					    <img src={'/img/logomain.svg'} alt="Logo" className="logo"/>
				    </a>
                    <input className="input input-adress" placeholder="Адрес Доставки"></input>
				<div className="buttons">
					<Button text="Войти" btnClass='button-primary' imgClass='button-image' imgLogo='user.svg'/>
					<Button text="Корзина" btnClass='button-cash' imgClass='button-icon' imgLogo='shop.svg'/>

				</div>	
        </header>
    )
};
export default Header;