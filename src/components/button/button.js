
const Button = ({text, alt, imgClass, btnClass, imgLogo}) =>{
    return(
        <buttton className={ ['button', btnClass].join(' ')}>
            <img  className={imgClass} src={'/img/' + imgLogo } alt={alt}/>
            <span className="button-text">{text }</span>
        </buttton>
    )
};

export default Button; 