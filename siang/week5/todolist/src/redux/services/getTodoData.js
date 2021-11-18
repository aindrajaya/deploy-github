const baseUrl = 'http://localhost:3004'

export const getTodoData = () => {
  try {
    fetch(`${baseUrl}/todolist`)
    .then(res => res.json())
  } catch (error) {
    
  }
}