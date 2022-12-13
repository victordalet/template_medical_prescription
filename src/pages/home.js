import React from 'react';
import Navigation from '../components/navigation';
import Logo from '../components/logo';
import ContainerHistory_empty from "../components/container-history_empty";
import Information from "../components/information";

const data = JSON.parse(localStorage.getItem("data"));



const Home = () => {

    return (
        <div>
            <Logo/>
            <Navigation/>

            { (data.length === 0) ? ContainerHistory_empty("Vous n'aver pas encore réalisé d'ordonances","Commencer") :
            ContainerHistory_empty("Nombre d'ordonances réalisées :  "+data.length,"Continuer")}
            <Information/>
        </div>
    );
};

export default Home;