import { useState } from 'react'
import './App.css'

const initialItems = [
  {id: 1, description: "Passports", quatity: 2, packed: false},
  {id: 2, description: "Socks", quatity: 3, packed: true},
  {id: 3, description: "Pants", quatity: 3, packed: false}
]

function App() {

  const [isChecked, setIsChecked] = useState()

  const handleItemChecked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  
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

function List () {
  return (
    <div className='list'>
        {initialItems.map((item) => (
          <li key={item.id}>
            <input
              type='checkbox'
              checked={item.packed}
              onChange={() => handleItemChecked(item.id)}
            />
            <span style={item.packed ? {textDecoration: 'line-through'} : {}}>{item.quatity} {item.description}</span> 
            <span id="btn-remove">🗙</span>
          </li>
        ))}
    </div>
  )
}

function Stats () {
  return (
    <footer className='stats'>
      <h3> Total your List </h3>
    </footer>
  )
}
