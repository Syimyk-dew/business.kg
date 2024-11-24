import React from 'react';
import Header2 from '../Header2';
import Proda from '../Proda';
import Scrol from '../Scrol';
import Recomen from '../Recomen';
import Footer from '../footer';
import Model from '../Model';

function Main () {
    return (
        <div id='main'>
            <Header2/>
            <Proda/>
            <Model/>
            <Scrol/>
            <Recomen/>
            <Footer/>

        </div>
    )
}

export default Main;