import React, { useState } from 'react';
import { AppUi } from './AppUi';
import { useLocalStorage } from './useLocalStorege';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  const[todos, saveTodos] = useLocalStorage('TODOS_V!',[]);
  
  const [searchValue, setSearchValue] = useState('');
  const searchedTodos = todos.filter(
    (todo) => {
      // función texto sin tildes
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };
      // Normalizando texto sin tildes y a Lower Case
      const TodoTextLC = noTildes(todo.text.toLowerCase());
      const searchTextLC = noTildes(searchValue.toLowerCase());
      //renderizar con filtro
      return TodoTextLC.includes(searchTextLC);
    }
  )
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }
  return (
    <AppUi
      
      completedTodos ={completedTodos}
      totalTodos ={totalTodos}
      searchValue ={searchValue}
      setSearchValue ={setSearchValue}
      searchedTodos ={searchedTodos}
      completeTodos ={completeTodos}
      deleteTodos ={deleteTodos}
  
    />

  )
}

export default App;
