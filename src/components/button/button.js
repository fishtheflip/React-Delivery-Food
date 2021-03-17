import {Link} from 'react-router-dom';
import './button.css';


const Button = ({text, alt, imgClass, btnClass, imgLogo, path, haveIcon, counter}) =>{

    if(haveIcon === true && counter === 0){
        return(
            <Link className="link" to={path}>        
                <button href="!#" className={ ['button', btnClass].join(' ')}>
                    <img  className={imgClass} src={'img/' + imgLogo } alt={alt}/>
                    
                    <span className="button-text">{text }</span>
                </button>
            </Link>
    
        )
    }
    if(haveIcon === true && counter > 0){
        return(
            <Link className="link" to={path}>        
                <button href="!#" className={ ['button', btnClass].join(' ')}>
                    {/* <img  className={imgClass} src={'/img/' + imgLogo } alt={alt}/> */}
                    <i>{counter}</i>
                    <span className="button-text">{text }</span>
                </button>
        </Link>
    
        )
    }
    if(haveIcon === true){
        return(
            <Link className="link" to={path}>        
                <button href="!#" className={ ['button', btnClass].join(' ')}>
                    
                    <img  className={imgClass} src={'img/' + imgLogo } alt={alt}/>
                    
                    <span className="button-text">{text }</span>
                </button>
        </Link>
    
        )
    }
    if(haveIcon === false){
        return(
            <div >
            <a className="link" to={path} href="https://fishtheflip.github.io/Portfolio/">        
                <button href="!#" className={ ['button', btnClass].join(' ')}>
                    <span className="button-text">{text }</span>
                </button>
            </a>
            
            </div>
        )
    }


};

export default Button; 