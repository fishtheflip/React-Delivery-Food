import './section-heading.css';
const SectionHeading = () =>{
    return(
        <div className="section-heading">
            <h1 className="section-title">Рестораны</h1>
            {/* <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/> */}
            <div className='section-filter'>
                <div className="filter-block active"><span className='filter-title'>Все</span></div>
                <div className="filter-block"><span className='filter-title'>Пицца</span></div>
                <div className="filter-block"><span className='filter-title'>Суши</span></div>
            </div>

        </div>
    )
}
export default SectionHeading;