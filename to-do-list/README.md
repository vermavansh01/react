import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString && todoString !== "undefined") {
      try {
        let parsedTodos = JSON.parse(todoString)
        setTodos(parsedTodos)
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error)
        setTodos([]) // Default to empty array on error
      }
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished)
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
          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} disabled={todo.length <= 3} className='border border-black bg-violet-600 hover:bg-violet-800  text-white mx-4 px-2 py-1 rounded-md '>Save
          </button>
        </div>
        <main className='my-2  bg-violet-400 min-h-[90vh] p-2'>
          <h1 className=' text-4xl font-bold mx-2 text-center '>Your Todos</h1>
          <div className='m-2 p-2 border border-black w-[10vw] flex gap-2 rounded-md  bg-violet-500 font-bold hover:bg-violet-700'>
            <input onChange={toggleFinished} type="checkbox" checked={showFinished} />
            <div className="text-white ">Show Finished</div>
          </div>
          <div className="todos ">
            {todos.length === 0 && <div className='font-bold text-4xl h-[100vh] flex items-center justify-center'>No Todos To Display </div>}
            {todos.map(item => {
              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between m-2 border border-black p-2 items-center rounded-xl bg-violet-500 hover:bg-violet-700 ">
                <div className="box flex gap-2">
                  <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
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