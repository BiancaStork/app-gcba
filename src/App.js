import styles from './App.css';
import { obtenerCalles } from './controllers';
import {  useState } from 'react';

function App() {
  
  const [calles, setCalles]= useState([]);
  const [input, setInput] = useState('');

  function handleChange(e) {  
    var value = e.target.value;
    setInput(value);
  };

  async function handleClick(e) {
    e.preventDefault();
    var result = await obtenerCalles(input);
    if (result.length === 0) { alert("La calle y/o numeracion ingresada, no existe!")}   
    setCalles(result); 
   
   };


  return (
   <div className="App">
   <h1> BIENVENIDOS A LA TEST-APP</h1>
   <form onSubmit={handleClick} className='contenedor'>
    <label className="label">Introducir calle y numero</label>
    <input className='input' value={input} onChange={handleChange}/>
    <button className='button' type='submit'>BUSCAR</button>
    </form>
    <div>
    <ul>
        {calles?.map((direccion) => (
          <li key={direccion.cod_calle}>{direccion.direccion}</li>
        ))}
      </ul>
    </div>
       </div>
  );
}

export default App;
