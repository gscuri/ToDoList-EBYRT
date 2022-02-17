import React, { useEffect, useState } from 'react';
import './App.css';
import Item from './components/item';
import todoApi from './services/apiHandler';
import api from './services/api';

function App() {
  const [itens, setItens] = useState([]);
  const [filter, setFilter] = useState({ filter: false, active: false });

  // function getList() {
  //   fetch('http://localhost:3000/todo/list', { method: 'GET' })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setItens(data);
  //     });
  // }

  const getList = async () => {
    try {
      const { data } = await api.get('list');
      setItens(data);
    } catch (error) {
      const { data } = error.response;
      console.log(data.message);
    }
  };

  const insertList = async () => {
    try {
      const { data } = await api.post('insert', { tasks: '' });
      setItens(data);
    } catch (error) {
      const { data } = error.response;
      console.log(data.message);
    }
  };

  function handleUpdate(item) {
    if (item.delete) {
      todoApi('delete', 'delete', item).then((data) => {
        getList();
      });
      return;
    }

    todoApi('update', 'put', item).then((data) => {
      getList();
    });
  }

  function handleAdd() {
    todoApi('insert', 'post', { text: '', active: 'true' }).then((data) => {
      console.log(data);
      getList();
    });
  }

  const itensToShow = filter.filter ? itens.filter((item) => item.active === filter.active) : itens;

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="main">
      <div className="to-do-list">
        <h1>EBYRT - To Do List</h1>

        {itensToShow.map((item) => (
          <Item
            // eslint-disable-next-line no-underscore-dangle
            key={ item._id }
            itens={ itens }
            item={ item }
            handleUpdate={ handleUpdate }
          />
        ))}
        <div className="rowContainer">
          <span
            className="filter"
            style={ filter.filter ? {} : { fontWeight: 'bold' } }
            onClick={ () => setFilter({ filter: false }) }
          >
            Todos
          </span>
          <span
            className="filter"
            style={ filter.filter && filter.active === true ? { fontWeight: 'bold' } : {} }
            onClick={ () => setFilter({ filter: true, active: true }) }
          >
            Pendentes
          </span>
          <span
            className="filter"
            style={ filter.filter && filter.active === false ? { fontWeight: 'bold' } : {} }
            onClick={ () => setFilter({ filter: true, active: false }) }
          >
            {' '}
            Concluídos
          </span>
        </div>
        <div className="rowContainer">
          <button onClick={ insertList }>Adicionar To Do</button>
        </div>
      </div>
    </div>
  );
}

export default App;
