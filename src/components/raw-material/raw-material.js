import Button from "../button/button";
import "./raw-material.css";
import "../button/button";
const RawMaterial = () =>{
    return(
        <section className="empty-basket-section">
        <div className="empty-basket-label">
            <label>
                Данный раздел находиться в разработке 🎯
            </label>
        </div>

        {/* <div className="empty-basket-label-mini">
            <label>
                    
            </label>
            <label>
                    Для того, чтобы сделать заказ, перейдите на главную страницую
            </label>
        </div> */}
        <div className="empty-basket-img">
            <img  className="empty-basket-logo" src="/img/raw-page.png"/>
        </div>
        <div className="empty-basket-label">
            <Button text="Связаться с автором" btnClass='button-dark' imgClass='button-image' imgLogo='contact.png' path="/raw"/>
            
        </div>
    </section>
    );
};
export default RawMaterial;