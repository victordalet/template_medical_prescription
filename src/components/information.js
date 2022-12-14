import React, {useRef} from 'react';
import SignaturePad from "react-signature-canvas";

const data = JSON.parse(localStorage.getItem("user"));
console.log(data);


function new_information(imageURL) {
    let data = [];
    data.push(document.getElementById("id-prescripteur").value);
    data.push(document.getElementById("name-prescripteur").value);
    data.push(document.getElementById("first-name-prescripteur").value);
    data.push(document.getElementById("tel-prescripteur").value);
    data.push(imageURL);
    console.log(data);
    localStorage.setItem("user",JSON.stringify(data));
    document.location="";

}

function Information() {

    const sigCanvas = useRef({});

    function clear() {
        if (data[4]) {
            new_information(null);
        }
        else{
            sigCanvas.current.clear();
        }
    }

    function save() {
        new_information(sigCanvas.current.getTrimmedCanvas().toDataURL("signature/png"));
    }

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
            <label className={"label-sign"}>Signature :</label>
            <div className={"signature"}>
                {(data[4]) ? <img src={data[4]}/> : <SignaturePad ref={sigCanvas} canvasProps={{width: 300, height: 200}}/> }
            </div>
            <input type={"button"} onClick={clear} value={"Effacer"} className={"sign"}/>
            <input type={"button"} value={"Sauvegarder"} onClick={save}/>
        </form>
    );
}

export default Information;