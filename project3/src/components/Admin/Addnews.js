import React from 'react'
import { useNavigate } from 'react-router-dom';
import AdminNav from '../../AdminNav';
function Addnews(props) {
  const {createApi, handler,filehandler}= props
  const navigate=useNavigate();
  return (
    <div>
      <AdminNav/>
      <div className='container'>
        <div classNameName='container'>
        <form onSubmit={(e)=>{
          e.preventDefault()
          createApi()
          navigate("/shownews")
        }}>
        <div className="form-group">
    <label for="exampleInputName">Title</label>
    <input  name="title" onChange={handler} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Title"/>    
  </div>          
  <div className="form-group">
    <label for="exampleInputEmail1">Description</label>
    <input  name="description" onChange={handler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Description"/>    
  </div>
  {/* <div className="form-group">
    <label for="exampleInputEmail1">Description</label>
    <input  name="category" onChange={handler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>    
  </div> */}

  {/* <div className="form-group">
    <label for="exampleFormControlSelect1">Select Category</label>
    <select className="form-control" onChange={handler} type="text" name="category">
      <option value="latest">Latest</option>
      <option value="cricket">Cricket</option>
      <option value="blog">Blog</option>
      <option value="health">Health</option>
      <option value="bussiness">Business</option>
    </select>
  </div> */}
  <div>
  <label for="exampleFormControlSelect1">Select Category</label>
  <select class="form-select" type="text" name="category" onChange={handler} aria-label="Default select example">
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
  <input name='image' class="form-control" type="file" onChange={filehandler} id="formFile"/>
</div>

  <hr/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
        
    </div>
  )
}

export default Addnews