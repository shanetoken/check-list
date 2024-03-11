import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Form />
      <PackingList />
      <Stats />
      <Footer />
    </>
  )
}

export default App


function Header () {}

function Form () {}

function PackingList () {}

function Stats () {}

function Footer () {}