import './App.css';
import React from 'react';

function App() {
  const [names, setNames] = React.useState([]);

  React.useEffect(()=>{
    fetch("/api")
    .then((response) => response.json())
    .then((data) => { 
      setNames(data);
      console.log(data);
    })
    .catch((err) => console.error(err));
  },[])
  
  return (
    <section className='App'>
      <header className='App-header'>
        <h1> Hola mundo! </h1>
      </header>

      {names === undefined && 
        <section>
          <h2> Por ahora no hay usuarios registrados </h2>
        </section>  
      }

      {names.map( (name, i) => (
        <h3 key={i}> {name.nombre} </h3>
      ))}

    </section>
    
  );
}

export default App;
