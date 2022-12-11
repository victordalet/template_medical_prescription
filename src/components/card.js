import React from 'react';

function Card(name) {
    return (
        <div className="card">
            <img src="../assets/img/truc.png" alt={name}/>
            <h3>{name}</h3>
        </div>
    );
};

export default Card;