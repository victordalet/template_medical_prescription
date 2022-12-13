import React from 'react';
import data from "../assets/data/user.json";

function Information() {
    return (
        <form className={"home"}>
            <h2>Informations automatiques : </h2>
            <label  htmlFor={"id-prescripteur"} >ID :</label>
            <input type={"text"}   id={"id-prescripteur"} value={(data[0]) ? data[0]:""}/>
            <label htmlFor={"name-prescripteur" } >Nom :</label>
            <input type={"text"}   id={"name-prescripteur"} value={(data[1]) ? data[1]:""} />
            <label htmlFor={"first-name-prescripteur"} >Prénom :</label>
            <input type={"text"}   id={"first-name-prescripteur"} value={(data[2]) ? data[2]:""} />
            <label htmlFor={"tel-prescripteur"} >Tel :</label>
            <input type={"text"}    id={"tel-prescripteur"} value={(data[3]) ? data[3]:""} />
            <input type={"button"} value={"Sauvegarder"}/>
        </form>
    );
}

export default Information;