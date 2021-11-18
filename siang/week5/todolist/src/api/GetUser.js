const url = 'http://jsonplaceholder.typicode.com/posts'
export const getPosts = fetch(url)
  .then(res => res.json())
  .then(data => 
    console.log(data)
  )
