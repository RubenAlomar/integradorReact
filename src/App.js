import React, {Component} from 'react';

// componentes propios
import Header from './componentes/Header';
import Noticias from "./componentes/Noticias";

class App extends Component {

  state = {
    noticias :[]
  }

  componentDidMount(){
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    let url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4102083932c74b53852d686899f771e4'
    
  
  
  fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(noticias =>{
      console.log(noticias)
      this.setState({
        noticias: noticias.articles
      })
    })
  }

  render() {
    return(
      <div>
        <Header/>
        <div className='container'>
          <Noticias
          noticias={this.state.noticias}
          />
        </div>
      </div>
    )
  }
}

export default App;
