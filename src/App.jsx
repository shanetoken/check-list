import React, { useState } from 'react';
import './App.css';

const App = () => {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 3, packed: true },
    { id: 3, description: "Pants", quantity: 3, packed: false },
  ];

  // Adding state for items to keep track of changes in list
  const [items, setItems] = useState(initialItems);

  const addItem = () => {
    // Get values from inputs
    let selectValue = document.getElementById('select').value;
    let inputText = document.getElementById('input-text').value;
  
    if (!inputText || !selectValue) return;
  
    // Create a new item object
    const newItem = {
      id: Date.now(), // Using current timestamp as a unique identifier
      description: inputText,
      quantity: parseInt(selectValue),
      packed: false,
    };
  
    // Update state with the new item
    setItems([newItem, ...items]);
  
    // Clear the form after adding the item
    document.getElementById('input-text').value = '';
    Array.from(document.querySelectorAll('#select option')).forEach(option => {
      option.selected = false;
    });
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const togglePackedStatus = (id) => {
    setItems(items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  };

  return (
    <div className="App">
      <Header />
      <Form addItem={addItem}/>
      <List items={items} removeItem={removeItem} togglePackedStatus={togglePackedStatus}/>
      <Stats items={items}/>
    </div>
  );
};

// Header component
const Header = () => (
  <header>
    <h1>📋 CHECK LIST</h1>
  </header>
);

// Form component
const Form = ({ addItem }) => ( /* TODO */
  <>
    <div className='title'>
      <h2>Add more Items 📦</h2>
    </div>
    <div className='form-input'>
        <select id='select'>
          {Array.from({length: 10}, (_, index) => index + 1).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <input id='input-text' type='text' placeholder="Item..." />
        <button id='btn-form' type='submit' onClick={() => addItem()}>➕</button>
    </div>
  </>
);

// List component
const List = ({ items, removeItem, togglePackedStatus }) => (
  <ul className="list">
    {items.map(item => (
      <li key={item.id}>
        <label>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => togglePackedStatus(item.id)}
          />
          <span style={{ textDecoration: item.packed ? 'line-through' : '' }}>
            {item.quantity} {item.description}
          </span>
        </label>
        <button id='btn-remove' onClick={() => removeItem(item.id)}>❌</button>
      </li>
    ))}
  </ul>
);

// Stats component
const Stats = ({ items }) => (
  <footer className="stats">
    <h3>Total Items: {items.length}</h3>
  </footer>
);

export default App;