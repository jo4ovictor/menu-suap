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
            <p className="date"> 10/06/2022</p>
            <p className="noticia">aluno passa no enem</p>
        </div>
    );

}
export default Perfil;