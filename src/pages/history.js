import React from 'react';
import Navigation from '../components/navigation';
import Logo from '../components/logo';
import ContainerHistory from "../components/container-history";

const History = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className="container-global-history">
                <ContainerHistory/>
                <ContainerHistory/>
                <ContainerHistory/>
                <ContainerHistory/>
                <ContainerHistory/>
                <ContainerHistory/>
            </div>
        </div>
    );
};

export default History;