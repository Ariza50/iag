import {useState} from "react";
import './Todo.css'

export const Todo = () => {
  const [items, setItems] = useState([])

  const addItem = () => {
    const item = document.getElementById('item').value
    setItems([
      ...items,
      {
        value: item,
        checked: false
      }
    ])
  }

  const checkItem = (index) => {
    const tmpItems = [...items]
    tmpItems[index].checked = !tmpItems[index].checked
    setItems(tmpItems)
  }

  const deleteItem = (index) => {
    const tmpItems = [...items]
    tmpItems.splice(index, 1)
    setItems(tmpItems)
  }

  return (
    <>
      <div>
        <input id='item' />
        <button onClick={addItem}>Añadir</button>
      </div>
      <div>
        <ul>
          {
            items.map((item, index) => (
              <li key={index}>
                {index}
                <input id="check" type="checkbox" onClick={() => checkItem(index)}/>
                <div className={item.checked ? 'fill' : 'todo'}>{item.value}</div>
                <button onClick={() => deleteItem(index)}>Eliminar</button>
              </li>
            ))
          }
        </ ul>
        {
          items.length === 0 && <p className="empty">No hay tareas</p>
        }
      </div>
    </>
  )
}
