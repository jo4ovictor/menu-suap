import HelloWorld from './HelloWorld';
import Button from './Button';
import SayName from './SayName';
import Perfil from './Perfil';
function App() {

    const lista_pessoas = [
      {
        nome:"Karen",
        idade:"18",
        foto:"https://picsum.photos/600",
      },
      {
        nome:"Igor",
        idade:"18",
        foto:"https://picsum.photos/600",
      },
      {
        nome:"meu 3eirão",
        idade:"18+",
        foto:"https://picsum.photos/600",
      }

    ];

  return(
    <div>
      <HelloWorld />
      {/* <Button cor="#ffff00" frase="Confirmar"/>
      <Button cor="#00ff00" frase="Recusar"/> */}
      <SayName nome = " love"/>
      <Perfil foto ="https://picsum.photos/600" nome="Mario" idade={17}/>

      { lista_pessoas.map( (pessoa) => {
        return <Perfil 
                    foto={pessoa.foto} 
                    nome={pessoa.nome}
                    idade={pessoa.idade}
                />
      } ) }

    </div>
    
  );
}

export default App;