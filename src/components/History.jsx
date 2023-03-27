import React from 'react'
import ReactPlayer from 'react-player'

const History = ({card}) => {
    // console.log("hiiii")
  return (
    <div className='hist-card'>
      <h1>History</h1>
 
       <p>{card}</p>
        {/* <ReactPlayer
       
        
         height="150px"
         controls  width="250px" url={card} /> */}
   
    </div>
  )
}

export default History
