
import './App.css';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { useState } from 'react';

function App() {
  const [preferencesData, setPreferencesData] = useState({
    verdura: '',
    fruta: '',
    experiencia: ''
  });

  const [validForm, setValidForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(preferencesData.verdura.length >= 3 && preferencesData.verdura.charAt(0) !== ' ' && preferencesData.fruta.length >= 6){
      setValidForm(true)     
    } else{
      setValidForm(false)
    }
  }
  return (
    <div className="App">
      <Header />
      <form className='form' onSubmit={handleSubmit}>
        <label className='labels'>Ingresa tus verduras preferidas</label>
        <input type='text' value={preferencesData.verdura} onChange={(e) => setPreferencesData({ ...preferencesData, verdura: e.target.value })} />

        <label className='labels'>Ingresa tus frutas preferidas</label>
        <input type='text' value={preferencesData.fruta} onChange={(e) => setPreferencesData({ ...preferencesData, fruta: e.target.value })} />
        
        <label className='labels'>Experiencia previa con huertas</label>
        <select value={preferencesData.experiencia} onChange={(e) => setPreferencesData({...preferencesData, experiencia: e.target.value})}>
          <option value='' disabled>Seleccione uno</option>
          <option value='inicial'>Sin experiencia previa</option>
          <option value='basico'>Conocimientos básicos</option>
          <option value='intermedio'>Intermedio</option>
          <option value='avanzado'>Avanzado</option>
        </select>

        <button type='submit' className='submitButton'>Enviar formulario</button>
      </form>
      {validForm && <Card preferencesData={preferencesData}/>}
      {!validForm && <p className='alertMessage'>Por favor, chequea que la información sea correcta</p>}
    </div>
  );
}

export default App;
