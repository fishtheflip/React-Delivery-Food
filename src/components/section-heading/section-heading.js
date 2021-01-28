import './section-heading.css';
const SectionHeading = () =>{
    return(
        <div className="section-heading">
            <h1 className="section-title">Рестораны</h1>
            <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/>
        </div>
    )
}
export default SectionHeading;