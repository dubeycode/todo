import './main'
import { Todo } from './components/Todo' 
import { Input } from './components/Input'
import {Todoitems} from './components/Todoitems'

function App() {

  const todoItems =[{
    name:'Buy Milk',
    dueDate:'23/08/25',
  },{
     name:'Go to collage',
    dueDate:'23/08/25',
  }
  ,{
     name:'pay bill',
    dueDate:'24/08/25',
  }
  ,{
     name:'play crickt',
    dueDate:'24/08/25',
  }
  ,{
     name:'Coding',
    dueDate:'24/08/25',
  }
]
  return (
    <>
  <Todo></Todo>
  <Input ></Input>
  <Todoitems  todoItems={todoItems}></Todoitems>

    </>
  )
}

export default App