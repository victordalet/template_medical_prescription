import React from 'react';

const data = JSON.parse(localStorage.getItem("user"));


function new_information() {
    let data = [];
    data.push(document.getElementById("id-prescripteur").value);
    data.push(document.getElementById("name-prescripteur").value);
    data.push(document.getElementById("first-name-prescripteur").value);
    data.push(document.getElementById("tel-prescripteur").value);
    localStorage.setItem("user",JSON.stringify(data));
    document.location = "";
}

function Information() {
    return (
        <form className={"home"}>
            <h2>Informations automatiques : </h2>
            <label  htmlFor={"id-prescripteur"} >ID :</label>
            <input type={"text"}   id={"id-prescripteur"} defaultValue={(data[0]) ? data[0]:""}/>
            <label htmlFor={"name-prescripteur" } >Nom :</label>
            <input type={"text"}   id={"name-prescripteur"} defaultValue={(data[1]) ? data[1]:""} />
            <label htmlFor={"first-name-prescripteur"} >Prénom :</label>
            <input type={"text"}   id={"first-name-prescripteur"} defaultValue={(data[2]) ? data[2]:""} />
            <label htmlFor={"tel-prescripteur"} >Tel :</label>
            <input type={"text"}    id={"tel-prescripteur"} defaultValue={(data[3]) ? data[3]:""} />
            <input type={"button"} value={"Sauvegarder"} onClick={new_information}/>
        </form>
    );
}

export default Information;