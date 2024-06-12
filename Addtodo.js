import React, { useState } from 'react'

const Addtodo = (addTodo) => {
    const[title, setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
            {
                alert("title or desc cant be blank");
            }
            addTodo(title,desc);
    }
  return (
    <div className="container my-3">
        <h3>Add a to do</h3>
      <form onSubmit={submit}>
  <div class="mb-3">
    <label for="title" class="form-label">To do title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">to do description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc"/>
  </div>
  <button type="submit" class="btn btn-sm btn-success">Add To do</button>
</form>
    </div>
  )
}

export default Addtodo
