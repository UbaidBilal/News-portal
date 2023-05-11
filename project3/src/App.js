import logo from './logo.svg';
import './App.css';
import './Style.css';

import React,{useState} from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Latest from './components/Latest';
import Pakistan from './components/Pakistan';
import International from './components/International';
import Sports from './components/Sports';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Business from './components/Business';
import Cricket from './components/Cricket';
import Blog from './components/Blog';
import Timedate from './components/Timedate';
import Admin from './components/Admin/Admin';
import Shownews from './components/Admin/Shownews';
import Addnews from './components/Admin/Addnews';
import Navbar from './Navbar';
import Footer from './Footer';
import Updatenews from './components/Admin/Updatenews';

function App() {
  //state for editing the data
  const [Getid, SetGetid]= useState()
  const empty={
    title:"",
    description:"",
    category:"",
    image: null,
  }
  //state for handling input
  const [handle, setHandle]=useState([])

  // function for handle the input fields
const handler=(e)=>{
  const {name,value}=e.target;
  setHandle({...handle,[name]:value})
  console.log(handle)
 }
 const filehandler = (e) => {
  setHandle({ ...handle, [e.target.name]: e.target.files[0] });
 };
 // function for creating the Api data
const createApi=()=>{
  const myFormData = new FormData();

		myFormData.append("title", handle.title);
		myFormData.append("description", handle.description);
		myFormData.append("category", handle.category);
		myFormData.append("image", handle.image);

  fetch("http://localhost:5000/create",{
    method:'POST',
    // headers:{
    //  "content-Type": "application/json",
    // },
    // body:JSON.stringify(handle)
    body: myFormData,

  })
  }

  // function for editing the Api data
  const editApi=async(id)=>{
    var data =await fetch(`http://localhost:5000/get/${id}`)
    data =await data.json();
    setHandle(data)
    SetGetid(id)
    console.log(handle)
  }

  // function for updating the Api
const updateApi=()=>{
  
  fetch(`http://localhost:5000/get/${Getid}`,{
    method:'PUT',
    headers:{
      "content-Type": "application/json",
     },
     body:JSON.stringify(handle)
   
  })
  
  }

  return (
    <div className="App">
      <Timedate></Timedate>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Latest/>}/>
          <Route path='/pakistan' element={<Pakistan/>}/>
          <Route path='/international' element={<International/>}/>
          <Route path='/sports' element={<Sports/>}/>
          <Route path='/entertainment' element={<Entertainment/>}/>
          <Route path='/health' element={<Health/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/cricket' element={<Cricket/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/shownews' element={<Shownews editApi={editApi}/>}/>
          <Route path='/addnews' element={<Addnews createApi={createApi} handler={handler} filehandler={filehandler}/>}/>
          <Route path='/updatenews' element={<Updatenews updateApi={updateApi} handle={handle} handler={handler} filehandler={filehandler}/>}/>
            
        </Routes>
        <Footer/>
      </Router>
      
      
     
    </div>
  );
}

export default App;
