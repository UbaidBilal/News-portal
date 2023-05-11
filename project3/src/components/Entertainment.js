import React,{useState,useEffect} from 'react'
import Section from '../Section'

function Entertainment() {
  
        const [data,setData]= useState([]);
  
  
const fetchApi=async()=>{

  var value=await fetch("http://localhost:5000/show")
  value=await value.json()
  const update=value.filter((currentElem)=>{
    return currentElem.category === "entertainment";
  })
setData(update)
console.log(value)

}

useEffect(()=>{
  
  fetchApi()
  
},[])

  return (
    <div className='g-0'>
        

        
          <div>
          <div className="container-fluid border">
          <div className="row">
          <div className="col-lg-1 text-end p-3">
          </div>
          
          <div className="col-lg-3 text-end p-3 border">
            
           <h5 style={{ fontWeight:'700', fontSize: "25px" ,fontFamily: 'Urdu Naskh Asiatype'}}> مقبول خبریں</h5>
           {data.map((item) => (
           <div>
           <hr/>
  
           <img className='img-fluid' src={`http://localhost:5000/assets/${item.image}`} alt=""/>
           <br/>
           <br/>
           <h6 style={{fontSize: "25px" ,fontFamily: 'Urdu Naskh Asiatype'}}>{item.title}</h6>
            <hr/>
            </div>
            ))}
          </div>
          
          
          <div className="col-lg-1 text-end p-3">
          </div>
          
          <div className="col-lg-7 text-end pt-5 pe-4 border">
          {data.map((item) => (
            <div>
            <h2 style={{fontWeight:'700', fontSize: "34px", fontFamily: 'Urdu Naskh Asiatype Alvi Nastaleeq Urdu Naskh Asiatype Tahoma Lucida Grande Verdana Arial Sans-Serif'}} className="text-end">{item.title}</h2>
          
            <img className='img-fluid pt-2 pb-2' src={`http://localhost:5000/assets/${item.image}`} width="500px"/>
            <br/>
            <p style={{fontSize: "25px" ,fontFamily: 'Urdu Naskh Asiatype'}}>{item.description}</p>
          <hr/>
          </div>
          ))}
          </div>
          
          </div>
          </div>
        </div>
         
          </div>
  )
}

export default Entertainment