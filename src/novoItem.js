import React, { useState } from 'react';
const NovoItem = ({ onSubmit }) => {

  const [newItem, setNovoItem] = useState('');

  function setNovaTarefa({target}) {
    setNovoItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className="Novo-item"
          placeholder="Digite para adicionar uma tarefa"
          onChange={setNovaTarefa}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default NovoItem;

