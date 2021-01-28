// import user from '../../img/user.svg';
// import shop from '../../img/shop.svg';

const Button = ({text, alt, src, imgClass, btnClass}) =>{
    return(
        <buttton className={ ['button', btnClass].join(' ')}>
            <img  className={imgClass} alt={alt}/>
            <span className="button-text">{text}</span>
        </buttton>
    )
};

export default Button; 