import { useState } from "react";

function useLocalStorage(){
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedItem;
  if(!localStorageTodos){

    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedItem = [];

  }else{
    parsedItem = JSON.parse(localStorageTodos);
  }

  const [item, setItem] = useState(parsedItem); 
  
  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item, saveItem]
}
export {useLocalStorage};