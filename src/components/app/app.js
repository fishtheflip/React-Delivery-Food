import Container from '../container/container';
import Main from '../main/main';
import Footer from '../footer/footer';
import React, {useState} from 'react';
import data from '../../data/data';
import RestaurantPage from '../restaurant-page/restaurant-page';





const App = () => {
    const  [restourantId, setrestourantId] = useState('0');
    return(
        <React.Fragment>
                <Container/>

                         
                         <Main data={data}/> 
                        <RestaurantPage data={data} resId={'3'}/>

                <Footer/>
        </React.Fragment>
    )
};

export default App;