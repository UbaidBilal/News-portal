import React from 'react'

function Timedate() {
    const current = new Date();
      const month = ['جنوری','فروری','مارچ','اپریل','مئی','جون','جولائی','اگست','ستمبر','اکتوبر','نومبر','دسمبر'] 
    // const i=0;
    //const month = current.getMonth()
    let newMonth = month[current.getMonth()]
    

  const date = `${current.getFullYear()}   ${newMonth}  ${current.getDate()}`;
  
  return (
    <div className='text-white'>
      <div className='row'>
      <div className='col-5'></div>
      <div className='col-2'></div>
      <div className='col-5'>
      <div className='row'>
        <div className='col-4'><h4>{current.getFullYear()}</h4></div>
        <div className='col-3'><h4>{newMonth}</h4></div>
        <div className='col-2'><h4>{current.getDate()}</h4></div>
        <div className='col-3'></div>
      </div>
      
      </div>
      </div>
      
      {/* {<h1> {current.getFullYear()} {newMonth} {current.getDate()} </h1>} */}
        {/* <h1>Current date is {date}</h1> */}
    </div>
  )
}

export default Timedate