import React from 'react';


const data = JSON.parse(localStorage.getItem("user"));
const old_data = JSON.parse(localStorage.getItem("data"));

function write(new_data) {
    console.log(new_data);
    localStorage.setItem("data",JSON.stringify(new_data));
    document.location = "ordonances";
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
}


function Form() {
    return (
        <form>
            <ion-icon name="arrow-back-outline" onClick={active}></ion-icon>
            <label htmlFor={"id-prescripteur"}>ID :</label>
            <input required="required" type={"text"} id={"id-prescripteur"} defaultValue={(data[0]) ? data[0] : ""}/>
            <label htmlFor={"name-prescripteur"}>Nom :</label>
            <input required="required" type={"text"} id={"name-prescripteur"} defaultValue={(data[1]) ? data[1] : ""}/>
            <label htmlFor={"first-name-prescripteur"}>Prénom :</label>
            <input required="required" type={"text"} id={"first-name-prescripteur"} defaultValue={(data[2]) ? data[2] : ""}/>
            <label htmlFor={"tel-prescripteur"}>Tel :</label>
            <input required="required" type={"text"} id={"tel-prescripteur"} defaultValue={(data[3]) ? data[3] : ""}/>
            <label htmlFor={"name-patient"}>Nom Patient :</label>
            <input required="required" type={"text"} id={"name-patient"}/>
            <label htmlFor={"first-name-patient"}>Prénom Patient :</label>
            <input type={"input"} id={"first-name-patient"}/>
            <input type={"button"} id={"send"} value={"Envoyer"}/>
            <input type={"button"} id={"print"} value={"Imprimer"}/>
            <input type={"button"} id={"save"} value={"Sauvegarder"} onClick={get_data}/>
        </form>
    );

}

export default Form;