import React from 'react';
import old_data from "../assets/data/history.json";



function write(data) {
    const fs = require("fs");
    fs.writeFile("../assets/data/history.json", data, (err) => {
        if (err) throw err;
    });
}

function save(data) {
    let new_data = [];
    new_data.push(data);
    old_data.map((i)=>new_data.push(i));
    write(new_data);
}

function get_data() {
    const input = document.querySelectorAll("input[type='text']");
    let data = [];
    const now = new Date();
    data.push(document.getElementById("name-patient").value+" "+document.getElementById("first-name-patient").value);
    data.push(now.getDate()+"/"+(now.getMonth()+1)+"/"+now.getFullYear());
    for (let i = 0 ; i < 5 ; i++) {
        data.push(input[i].value);
    }
    save(data);
}

function active() {
    document.querySelector("form").classList.toggle("active");
    console.log("t");
}


function Form() {
    return (
        <form>
            <ion-icon name="arrow-back-outline" onClick={active} ></ion-icon>
            <label  htmlFor={"id-prescripteur"} >ID :</label>
            <input type={"text"}   id={"id-prescripteur"} />
            <label htmlFor={"name-prescripteur" } >Nom :</label>
            <input type={"text"}   id={"name-prescripteur"} />
            <label htmlFor={"first-name-prescripteur"} >Prénom :</label>
            <input type={"text"}   id={"fisrt-name-prescripteur"} />
            <label htmlFor={"tel-prescripteur"} >Tel :</label>
            <input type={"text"}    id={"tel-prescripteur"} />
            <label htmlFor={"name-patient"} >Nom Patient :</label>
            <input type={"text"}  id={"name-patient"} />
            <label htmlFor={"first-name-patient"}>Prénom Patient :</label>
            <input type={"input"}  id={"first-name-patient"}/>
            <input type={"button"} id={"send"}  value={"Envoyer"}/>
            <input type={"button"} id={"print"} value={"Imprimer"}/>
            <input type={"button"} id={"save"}  value={"Sauvegarder"} onClick={get_data}/>
        </form>
    );
}

export default Form;