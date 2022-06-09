import { useState } from "react";
import Button from "./Button";
import "./Perfil.css";

function Perfil({nome, foto, idade}){
    const [numeroVizu, setNumeroVizu] = useState(0);


    function aumentarVizu(){
        setNumeroVizu (numeroVizu+1)
    }
    
    return(
        <div className="card">
            <p></p>
        </div>
    );

}
export default Perfil;