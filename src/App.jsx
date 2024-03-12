import { useState } from 'react'
import './App.css'

const initialItems = [
  {id: 1, description: "Passports", quatity: 2, packed: false},
  {id: 2, description: "Socks", quatity: 3, packed: true},
  {id: 3, description: "Pants", quatity: 3, packed: false}
]

function App() {

  
  return (
    <>
      <div className='app'>
          <Header />
          <Form />
          <List />
          <Stats />
      </div>
    </>
  )
}

export default App


function Header () {
  
  return (
    <header>
      <h1>📋 CHECK LIST</h1>
    </header>
  )
  
}

function Form () {
  return (
    <>

      <div className='form-title'>
        <h3>Add more tasks 📝</h3>
      </div>

      <div className='form-input'>
        <select id='select'>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
        </select>
        <input id='input-text' type='text' placeholder="Item..."></input>
        <button id='btn-form' type='submit'> ➕ </button>
      </div>

    </>
    
  )
}

function List({ initialItems }) {
  // Initialize the state with the given initialItems
  const [items, setItems] = useState(initialItems);

  // Handle item checked change
  const handleItemChecked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        packed: item.id === id && !item.packed
      }))
    );
  };

  // Handle removing item
  const handleRemoveClick = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onClick={() => handleItemChecked(item.id)}
            />
            <span style={{ textDecoration: item.packed ? "line-through" : "" }}>{item.quantity} {item.description}</span> 
            <button onClick={() => handleRemoveClick(item.id)}>❖</button>
          </label>
        </li>
      ))}
    </ul>
  );
}

function Stats () {
  return (
    <footer className='stats'>
      <h3> Total your List </h3>
    </footer>
  )
}
