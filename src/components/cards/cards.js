import Card from '../card/card';
import './cards.css';
const Cards = ({data}) => {
    console.log(data);
    const card = data.map((item)=>{
        return <Card key={item.id}
                id={item.id}
                name={item.name} 
                stars={item.stars} 
                minPrice={item.minPrice} 
                timeDelivery={item.timeDelivery} 
                food={item.food}
                img={item.img}
                />
                
    })
    return(
        <div className="cards">
            {card}
        </div>
    )
};
export default Cards;