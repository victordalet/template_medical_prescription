import React, {useRef, useState} from 'react';
import SignaturePad from "react-signature-canvas";

const data_user = JSON.parse(localStorage.getItem("user"));
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



function active() {
    document.querySelector("form").classList.toggle("active");
}



function Form() {
    const sigCanvas = useRef({});

    function get_data() {
        const input = document.querySelectorAll("input[type='text']");
        let data = [];
        const now = new Date();
        data.push(document.getElementById("name-patient").value+" "+document.getElementById("first-name-patient").value);
        data.push(now.getDate()+"/"+(now.getMonth()+1)+"/"+now.getFullYear());
        for (let i = 0 ; i < 5 ; i++) {
            data.push(input[i].value);
        }
        if (data_user[4]) {
            data.push(data_user[4]);
        }
        else {
            data.push(sigCanvas.current.getTrimmedCanvas().toDataURL("signature/png"))
        }
        save(data);
    }



    return (
        <form>
            <ion-icon name="arrow-back-outline" onClick={active}></ion-icon>
            <label htmlFor={"id-prescripteur"}>ID :</label>
            <input type={"text"} id={"id-prescripteur"} defaultValue={(data_user[0]) ? data_user[0] : ""}/>
            <label htmlFor={"name-prescripteur"}>Nom :</label>
            <input type={"text"} id={"name-prescripteur"} defaultValue={(data_user[1]) ? data_user[1] : ""}/>
            <label htmlFor={"first-name-prescripteur"}>Prénom :</label>
            <input type={"text"} id={"first-name-prescripteur"} defaultValue={(data_user[2]) ? data_user[2] : ""}/>
            <label htmlFor={"tel-prescripteur"}>Tel :</label>
            <input type={"text"} id={"tel-prescripteur"} defaultValue={(data_user[3]) ? data_user[3] : ""}/>
            <label htmlFor={"name-patient"}>Nom Patient :</label>
            <input type={"text"} id={"name-patient"}/>
            <label htmlFor={"first-name-patient"}>Prénom Patient :</label>
            <input type={"input"} id={"first-name-patient"}/>
            <label className={"label-sign"}>Signature :</label>
            <div className={"signature"}>
                {(data_user[4]) ? <img src={data_user[4]}/> : <SignaturePad ref={sigCanvas} canvasProps={{width: 70, height: 200}}/> }
            </div>
            <input type={"button"} id={"send"} value={"Envoyer"}/>
            <input type={"button"} id={"print"} value={"Imprimer"}/>
            <input type={"button"} id={"save"} value={"Sauvegarder"} onClick={get_data}/>
        </form>
    );

}

export default Form;