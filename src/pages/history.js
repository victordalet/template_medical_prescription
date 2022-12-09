import React from 'react';
import Navigation from '../components/navigation';
import Logo from '../components/logo';
import ContainerHistory from "../components/container-history";
import ContainerHistoryEmpty from "../components/container-history_empty";
import data from "../assets/data/history.json";

const History = () => {

    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className="container-global-history">
                {(data.length == 0) ? (<ContainerHistoryEmpty/>) : ""}
                {data.map((i) => ContainerHistory(i[0],i[1]))}
            </div>
        </div>
    );
};

export default History;