import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

useEffect(()=>{
  let todoString=localStorage.getItem("todos")
  if(todoString){
    let  todos= JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }
},[])

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS()
  }
  const handleDelete = (e, id) => {
    if (confirm("Are you sure you want to delete this todo?")) {
      let newTodos = todos.filter(item => item.id !== id);
      setTodos(newTodos);
      saveToLS()
    }
  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }


  return (
    <>
      <Navbar />
      <div className="container bg-violet-300  mx-auto my-4 p-4 rounded-xl min-h-[90vh]">
        <div className="addTodo bg-violet-400 justify-center py-2 flex  border border-black hover:bg-violet-500">
          <h1 className='text-lg font-bold '>Add a Todo :&nbsp;</h1>
          <input onChange={handleChange} onKeyDown={(e) => { if (e.key === 'Enter') handleAdd(); }} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className='border border-black bg-violet-600 hover:bg-violet-800  text-white mx-4 px-2 py-1 rounded-md '>Save
          </button>
        </div>
        <main className='my-2  bg-violet-400 min-h-[90vh] p-2'>
          <h1 className=' text-lg font-bold mx-2 text-center'>Your Todos</h1>
          <div className="todos ">
            {todos.length === 0 && <div className='font-bold text-4xl h-[100vh] flex items-center justify-center'>No Todos To Display </div>}
            {todos.map(item => {
              return <div key={item.id} className="todo flex justify-between m-2 border border-black p-2 items-center">
                <div className="box flex gap-2">
                  <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="button ">
                  <button onClick={(e) => handleEdit(e, item.id)} className='border border-black bg-violet-600 hover:bg-violet-800  text-white mx-1 px-2 py-1 rounded-md '>Edit
                  </button>
                  <button onClick={(e) => handleDelete(e, item.id)} className='border border-black bg-violet-600 hover:bg-violet-800  text-white mx-1 px-2 py-1 rounded-md'>Delete
                  </button>
                </div>
              </div>
            })}
          </div>

        </main>
      </div>
    </>
  )
}

export default App
