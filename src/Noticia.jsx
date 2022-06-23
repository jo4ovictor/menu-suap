import { useState } from "react";
import Button from "./Button";
import "./Noticia.css";

function Noticia({horario, desc}){
    const [numeroVizu, setNumeroVizu] = useState(0);


    function aumentarVizu(){
        setNumeroVizu (numeroVizu+1)
    }
    
    return(
        <div className="card">
            <p className="data">{horario}</p>
            <p className="desc">{desc}</p>
        </div>
    );

}
export default Noticia;