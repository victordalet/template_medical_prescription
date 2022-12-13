import React from 'react';


function active() {
    document.querySelector("form").classList.toggle("active");
    console.log("t");
}


function Card(name) {
    return (
        <div className="card" onClick={active}>
            <img src={require("../assets/img/"+name+".png")} alt={name}/>
            <h3>{name}</h3>
        </div>
    );
}

export default Card;