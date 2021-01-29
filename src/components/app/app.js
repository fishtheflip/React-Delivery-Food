import Container from '../container/container';
import Main from '../main/main';
import Footer from '../footer/footer';
import React from 'react';
import data from '../../data/data';
import RestaurantPage from '../restaurant-page/restaurant-page';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';




const App = () => {
    return(
        <React.Fragment>
                <Container/>
                <Router>
                    <Switch>
                        <Route path='/' component={()=> <Main data={data}/>} >
                        </Route>

                        {/* <Route exact path='/1' component={RestaurantPage}>
                        
                        </Route> */}
                    </Switch>
                </Router>
                <Footer/>
        </React.Fragment>
    )
};

export default App;