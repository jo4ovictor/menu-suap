import HelloWorld from './HelloWorld';
import Button from './Button';
import SayName from './SayName';
import Noticia from './Noticia';
function App() {

    const lista_noticias = [
      {
        hour: "28/05/2022 09:01",
        description: "Estão abertas as inscrições para Projetos de Ensino"
      },
      {
        hour: "28/05/2022 09:00",
        description: "Estão abertas as inscrições para Projetos de Pesquisa"
      },
      {
        hour: "27/05/2022 13:32",
        description: "Manutenção do Sistema SUAP acontece nesta sexta-feira(27)"
      },  
    ];

  return(
    <div>
      <HelloWorld />
      
      { lista_noticias.map( (noticia) => {
        return <Noticia horario={noticia.hour} desc={noticia.description}/>
      } ) }

    </div>
    
  );
}

export default App;