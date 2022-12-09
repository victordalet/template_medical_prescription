import React from 'react';


function redirection() {
    if (window.innerWidth)
    setTimeout(() => {
        window.location.href = "/ordonances";
    },800);
}

const ContainerHistoryEmpty = () => {

    return (
        <div className="container-history-empty">
            <h2>Vous n'avez pas réaliser d'ordonances</h2>
            <a onClick={redirection} className="btn">Commencer<span><ion-icon name="arrow-forward-outline"></ion-icon></span></a>
        </div>
    );
};

export default ContainerHistoryEmpty;