import React from 'react';

const ListaItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="Item-lista">
      <input
        className={ value.includes("Ler") || value.includes("Estudar") ? "Item" : null}
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default ListaItem;