import React from 'react';


function redirection() {
    if (window.innerWidth <= 500) {
        setTimeout(() => {
            window.location.href = "/ordonances";
        }, 800);
    }
    else {
        window.location.href = "/ordonances";
    }
}

function ContainerHistoryEmpty(sentence1,sentence2) {

    return (
        <div className="container-history-empty">
            <h2>{sentence1}</h2>
            <a  onClick={redirection} className="btn">{sentence2}<span><ion-icon name="arrow-forward-outline"></ion-icon></span></a>
        </div>
    );
}

export default ContainerHistoryEmpty;