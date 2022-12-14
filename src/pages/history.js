import React from 'react';
import Navigation from '../components/navigation';
import Logo from '../components/logo';
import ContainerHistory from "../components/container-history";
import ContainerHistoryEmpty from "../components/container-history_empty";

const data = JSON.parse(localStorage.getItem("data"));
console.log(data);

const History = () => {

    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className="container-global-history">
                {(data.length === 0) ? (ContainerHistoryEmpty("Vous n'avez pas réalisé d'ordonances","Commencer")) : ""}
                {data.map((i) => ContainerHistory(i))}
            </div>
        </div>
    );
};

export default History;