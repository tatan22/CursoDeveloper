import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUi({
   completedTodos,
   totalTodos,
   searchValue,
   setSearchValue,
   searchedTodos,
   completeTodos,
   deleteTodos
}) {
return (
   <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
         searchValue = {searchValue}
         setSearchValue = {setSearchValue}
      />
      <TodoList>
         {loading && <p>Estamos Cargando...</p>}
         {error && <p>Desesperate, hubo un error</p>}
         {(!loading && searchedTodos.length == 1) && <p>!Crea tu primer TODO!</p>}


         {searchedTodos.map(todo => (
         <TodoItem
            key = {todo.text}
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {() =>completeTodos(todo.text)}
            onDelete = {()=> deleteTodos(todo.text)}
         />
         ))}
      </TodoList>
      
      <CreateTodoButton />
   </>
   );
}

export { AppUi };