import React from 'react'

const Achievements = ({Honours}) => {
  return (
    <>
    <h3 className='text-center bg-secondary text-warning px-3 my-2'>Honours</h3> 
     <ul className="list-group list-group-flush">
    {
        Honours.map((str,index)=>(
            <li className="list-group-item" key={index}>{str}</li>
        ))
     }
    </ul>
    </>
  )
}

export default Achievements