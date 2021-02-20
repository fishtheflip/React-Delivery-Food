import {Link} from 'react-router-dom'

const Button = ({text, alt, imgClass, btnClass, imgLogo, path, haveIcon, counter}) =>{
    if(haveIcon === true && counter === 0){
        return(
            <Link className="link" to={path}>        
                <button href="!#" className={ ['button', btnClass].join(' ')}>
                    <img  className={imgClass} src={'/img/' + imgLogo } alt={alt}/>
                    <span className="button-text">{text }</span>
                </button>
        </Link>
    
        )
    }
    if(haveIcon === true){
        return(
            <Link className="link" to={path}>        
                <button href="!#" className={ ['button', btnClass].join(' ')}>

                    <img  className={imgClass} src={'/img/' + imgLogo } alt={alt}/>
                    {/* <h1>{counter}</h1> */}
                    <span className="button-text">{text }</span>
                </button>
        </Link>
    
        )
    }
    if(haveIcon === false){
        return(
            <Link className="link" to={path}>        
                <button href="!#" className={ ['button', btnClass].join(' ')}>
                    <span className="button-text">{text }</span>
                </button>
            </Link>
    
        )
    }


};

export default Button; 