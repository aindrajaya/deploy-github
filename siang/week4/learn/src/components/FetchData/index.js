import React, { Component } from 'react'

export default class FetchData extends Component {
  //componendDidMount
  constructor(){
    super()
    this.state = {
      users: [], //ini tempat untuk menyimpan data dari API -> bentuk tipe data penting
      posts: []
    }
  }

  //Synchronous
  componentDidMount = () => {
     //synchronous
    // fetch('http://jsonplaceholder.typicode.com/usersssss')
    //   .then(res => res.json()) //lalu menjalankan proses => res dng di konversi ke json
    //   .then(dataUser => this.setState({users: dataUser}))
  }
  
  //ketika komponent di render pertama kali
  //Asynchronous - async await
  componentDidMount = async () => {
    //asynchronous
    try {
      const data = await fetch('http://jsonplaceholder.typicode.com/users')
      const rawData = await data.json() 
      this.setState({users: rawData})
    } catch (error) {
      console.log("Data belum ke get")
    }
  }

  //method untuk me-load posts -> componentWillUnmount
  loadPosts = async () => {
    try {
      const data = await fetch('http://jsonplaceholder.typicode.com/posts') //await untuk menunggu proses
      const rawData = await data.json() 
      this.setState({posts: rawData}) //setState utk merubah state posts ygn ada di constructor
    } catch (error) {
      console.log("Data posts belum ke get")
    }
  }

  render() {
    const {users, posts} = this.state //destructuring
    const usernames = users.map(user => user.username) //nge-mapping data user.username, jadi munculnya satu2
    // console.log(usernames)

    return (
      <div>
        <ol>
          {/* Component Did mount */}
          {/* kalau ingin nampilin di browser maka bisa menggunakan map juga */}
          {usernames.map((a, id) => 
            <li key={id}>{a}</li> //yg di mapping itu elemennt <li></li>
          )}
        </ol>
        <div>
          {/* Component did Update/ Will Update */}
          <button onClick={this.loadPosts}>Load Post</button>
          {posts.length > 0 && (
            <ol>
              {posts.map((post, id) => (
                <li key={id}>{post.title}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    )
  }
}


