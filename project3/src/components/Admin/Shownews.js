import React,{ useState,useEffect } from 'react'
import {Link} from "react-router-dom"
import AdminNav from '../../AdminNav';


function Shownews(props) {
  const [data,setData]= useState([]);

const fetchApi=async()=>{

  var value=await fetch("http://localhost:5000/show")
value=await value.json()
setData(value)
}
//Api for Delete News
const deleteitems=async(id)=>{
  
  const valu= await fetch(`http://localhost:5000/delete/${id}`,
  { method: 'DELETE' })
  valu = await valu.json();
  fetchApi()

}
useEffect(()=>{
    fetchApi()
},[deleteitems])


  return (
    
    <div>
      <AdminNav/>
      <h1 className="text-center mt-3">Fetch Api</h1>
      <div className='container'>
      <table className="mt-4 table table-striped bordered">
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>Category</th>
          <th>Images</th>
          
          
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item._id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td><img src={`http://localhost:5000/assets/${item.image}`}
 										width='100px'/></td>
            <td><Link to="/updatenews"> <button type='submit' onClick={()=>props.editApi(item._id)} className='btn btn-outline-primary'>Edit</button></Link></td>
            <td><button onClick={()=>deleteitems(item._id)}  className='btn btn-outline-danger'>Delete</button></td>
            
          </tr>
        ))} 
      </table>
      </div>
    </div>
  )
}

export default Shownews