import './section-heading.css';
const SectionHeading = () =>{
    return(
        <div className="section-heading">
            <h1 className="section-title">Рестораны</h1>
            {/* <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/> */}
            <div className="btn-field">
                <div className="btn btn-activ"><label>Все</label></div>
                <div className="btn"><label>Пицца</label></div>
                <div className="btn"><label></label></div>
            </div>
        </div>
    )
}
export default SectionHeading;