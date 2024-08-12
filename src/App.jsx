import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Welcome from './components/Welcome'
import CounterComponent from './components/ClassCounter'
import Counter from './components/Counter'
import InputComponent from './components/propsdemo/inputComponent'
import AnimalContainer from './components/propsdemo/animals/AnimalContainer'
import Animal from './components/propsdemo/animals/Animal'
import 'bootstrap/dist/css/bootstrap.css'
import TodoContainer from './components/todolist/TodoContainer'
import Dashboard from './components/todolist/ConditionalRendering'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
    </>
  )
}

export default App
