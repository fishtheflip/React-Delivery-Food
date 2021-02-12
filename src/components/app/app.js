import Container from '../container/container';
import Main from '../main/main';
import Footer from '../footer/footer';
import data from '../../data/data';
import RestaurantPage from '../restaurant-page/restaurant-page';
import ShoppingBasket from '../shopping-basket/shopping-basket';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
  
} from "react-router-dom";
import RawMaterial from '../raw-material/raw-material';






const App = () => {
    const clickToRestourant = (e) =>{
        let currentRestourant = e.target;
        console.log(currentRestourant)
        
    }
    
    return(
        <Router>
            
                <Container/>
                
                <Switch>
                    <Route exact path="/">
                            <Main data={data} clickFunction={clickToRestourant}/> 
                    </Route>
                    <Route exact path="/shop">
                        <ShoppingBasket />
                    </Route>
                    <Route exact path="/raw">
                        <RawMaterial/>
                    </Route>

                    <Route  path={'/:id'} 
                            render={({match})=>{
                                const {id} = match.params
                                    console.log(match);
                                    return <RestaurantPage data={data} resId={id} />
                            }}>
                    </Route>

                    <Footer/>
            </Switch>


                
        </Router>
    )
};

export default App;