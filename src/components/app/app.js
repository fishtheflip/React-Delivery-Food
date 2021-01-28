import Container from '../container/container';
import Main from '../main/main';
import Footer from '../footer/footer';
import React from 'react';
import data from '../../data/data';


const App = () => {
    return(
        <React.Fragment>
                <Container/>
                <Main data={data}/>
                <Footer/>
        </React.Fragment>
    )
};

export default App;