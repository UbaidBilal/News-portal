import React from 'react'
import { useNavigate } from 'react-router-dom';

function Updatenews(props) {
    const navigate=useNavigate();
    const {updateApi, handler,handle,id,filehandler}= props
  return (
    <div className='container'>
        <div classNameName='container'>
        <form onSubmit={(e)=>{
          e.preventDefault()
          updateApi()
          navigate("/shownews")
        }}>
        <div className="form-group">
          <h1>{id}</h1>
    <label for="exampleInputName">Title</label>
    <input value={handle.title} name="title" onChange={handler} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name"/>    
  </div>          
  <div className="form-group">
    <label for="exampleInputEmail1">Description</label>
    <input value={handle.description} name="description" onChange={handler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>    
  </div>
  <div>
  <label for="exampleFormControlSelect1">Select Category</label>
  <select value={handle.category} class="form-select" type="text" name="category" onChange={handler} aria-label="Default select example">
   <option selected>Select Category</option>
   <option value="latest">Latest</option>
   <option value="pakistan">Pakistan</option>
   <option value="international">International</option>
   <option value="sports">Sports</option>
   <option value="entertainment">Entertainment</option>
   <option value="health">Health</option>
   <option value="bussiness">Bussiness</option>
   <option value="cricket">Cricket</option>
  <option value="blog">Blog</option>
</select>
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">Select Image</label>
  <input  name='image' class="form-control" type="file" onChange={filehandler} id="formFile"/>
</div>
  <hr/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
  )
}

export default Updatenews