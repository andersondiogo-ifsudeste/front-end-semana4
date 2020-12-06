import React, { useState } from 'react';
import './App.css';
import ListaItem from './listaItem'
import NovoItem from './novoItem'

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  function addNovaTarefa(task) {
    const itensCopy = Array.from(tarefas);
    itensCopy.push({id: tarefas.length, value: task});    
    setTarefas(itensCopy);
  }

  function AlteraTarefa({target}, index) {
    const itensCopy = Array.from(tarefas);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTarefas(itensCopy);
  }

  function DeletaTarefa(index) {
    const itensCopy = Array.from(tarefas);
    itensCopy.splice(index, 1);
    setTarefas(itensCopy);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1> Listas de tarefas</h1>
        <NovoItem onSubmit={addNovaTarefa} />
        {tarefas.map(({id, value}, index) => (
          <ListaItem
            key={id}
            value={value}
            onChange={(event) => AlteraTarefa(event, index)}
            onDelete={() => DeletaTarefa(index)}            
          />
        ))}
      </div>
    </div>
  )
}

export default App;
