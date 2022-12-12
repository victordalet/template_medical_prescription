import React from 'react';
import Navigation from '../components/navigation';
import Logo from '../components/logo';
import Card from "../components/card";
import Form from "../components/form";


const data_prescirtion = ["","","","","",""];

const Ordo = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className={"container-card"}>
                {data_prescirtion.map((i) => Card(i))}
            </div>
            <Form/>

        </div>
    );
};

export default Ordo;