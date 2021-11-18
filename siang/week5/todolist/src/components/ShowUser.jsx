import React, {useEffect, useState } from 'react'
// import { addPosts, getPosts } from '../api/GetUser'

export default function ShowUser() {
  const [postsValue, setPostsValue] = useState('')
  // const [posts, setPosts] = useState([])

  console.log(postsValue)

  const addPosts = () => {
    try{
      fetch('http://localhost:3004/posts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: postsValue,
          author: 'Rudi'
        })
      })
    }catch(err){
      console.log(err)
    }
  } 

  return (
    <div className='App'>
      <input 
        onChange={e => setPostsValue(e.target.value)}
        type='text'
        placeholder='masukan postingan'
      />
      <button onClick={addPosts}>Add Posts</button>
    </div>
  )
}
