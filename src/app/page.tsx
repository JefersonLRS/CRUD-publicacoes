"use client"

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";

const Page = () => {

  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');

  const HandleAddButton = () => {
    if (addField.trim() === '') return false;
    dispatch ({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    })
    setAddField('')
  }
  const HandleDoneCheckbox = (id: number) => {
    dispatch ({
      type: 'toggleDone',
      payload: { id }
    })
  }
  const HandleEdit = (id: number) => {
    const item = list.find(it => it.id === id);
    if (!item) return false;

    const newText = window.prompt('Editar tarefa', item.text);
    if (!newText || newText.trim() === '') return false;

    dispatch ({
      type: "editText",
      payload: { id, newText }
    })
  }
  const HandleRemoveButton = (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir essa tarefa?')) return false;
    dispatch({
      type: "remove",
      payload: {id}
    })
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>
      <div className="bg-gray-900 max-w-2xl mx-auto flex rounded-md border border-gray-400 p-4 my-4">
        <input
          type="text"
          className="border border-gray-400 p-3 bg-transparent text-white outline-none flex-1"
          placeholder="Digite uma tarefa"
          value={addField}
          onChange={e => setAddField(e.target.value)}
        />
        <button 
          onClick={HandleAddButton}
          className="p-4">
          ADICIONAR
          </button>
      </div>
      <ul className="max-w-2xl mx-auto">
        {list.map(item => (
          <li
            key={item.id}
            className="flex items-center p-3 my-3 border-b border-gray-700"
          >
            <input
              type="checkbox"
              className="w-6 h-6 mr-4"
              checked={item.done}
              onClick= {() => HandleDoneCheckbox(item.id)}
            />
            <p className="flex-1 text-lg">{item.text}</p>
            <button onClick={() => HandleEdit(item.id)} className="mx-4 hover:text-gray-500">Editar</button>
            <button onClick={() => HandleRemoveButton(item.id)} className="mx-4 hover:text-gray-500">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;