import React, {useState} from 'react'

export default function EditContact(props) {
  // console.log(props.location.state.contact);
  const {id, name, email} = props.location.state.contact
  const [userEdited, setUserEdited] = useState({
    id: id,
    name: name,
    email: email
  })

  const updatedData = (e) =>{
    e.preventDefault();
    if(userEdited.name === "" || userEdited.email === ""){
      alert("Harus diisi semua")
      return;
    }
    const { value } = e.target;
        setUserEdited(prevState => ({
            ...prevState,
            {
              name: value.name,
              email: value.email
            }
        }));
    console.log(userEdited);
    props.updateHandler(userEdited)
    // setUserEdited({
    //   name: "",
    //   email: ""
    // })
    // props.history.push("/")
  }

  console.log(userEdited)
  return (
    <div className="ui main">
      <h1>Halaman Edit</h1>
      <form onSubmit={updatedData}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={userEdited.name}
            onChange={e => e.target.value} //ini masih error
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={userEdited.email}
            onChange={e => e.target.value} //ini masih error
          />
        </div>
        <button type="submit">Edit</button>
      </form>
    </div>
  )
}
