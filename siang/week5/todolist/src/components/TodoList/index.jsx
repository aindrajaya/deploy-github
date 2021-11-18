import React, {useEffect,useState} from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState([]) //utk simpat banyak task
  const [todoValue, setTodoValue] = useState('') //utk simpan 1 task

  useEffect(() => {
    getData()
  }, [])

  console.log(todoValue);

  const getData = async () => {
    try {
      const data = await fetch('http://localhost:3004/todolists')
      const convert = await data.json()
      setTodos(convert)
    } catch (error) {
      console.log(error)
    }
  }

  const postData = async() => {
    try {
      await fetch('http://localhost:3004/todolists', {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        //berubah2
        body: JSON.stringify({
          id:todos.length + 1,
          task:todoValue
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  const addTodo = (event) => {
    event.preventDefault()
     //untuk menghilangkan ketikan input yg terakhir
    if(todoValue === ''){
      alert('Gabisa nambah task, harus diisi')
    } else {
      postData()
      setTodos([...todos, {
        id: todos.length + 1,
        task: todoValue
      }])
      setTodoValue('')  
    }
  }
  console.log(todos);

  const deleteItem = (pickedid) => {
    const newTodos = todos.filter((item) => item.id !== pickedid) //filtering munculin id yg bukan id tertulis di parameter
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <form onSubmit={addTodo}>
        <input 
          placeholder="add your todo list"
          onChange={e => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <button type="submit">Add</button>
      </form>
      <hr />
      <div className="todolists">
        <ul>
          {todos.map((todoItem, id) => (
            <li key={id}>
              {todoItem.task}
              <span onClick={()=>deleteItem(todoItem.id)}> X</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

