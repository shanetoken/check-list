import './App.css'

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
        <button id='btn-form' type='submit'>ADD</button>
      </div>
      
    </>
    
  )
}

function List () {
  return (
    <div className='list'>
      <ul>
        List
      </ul>
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
