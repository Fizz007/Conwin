import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import { RiEditCircleFill } from "react-icons/ri";
import ModalVideo from "react-modal-video";
// import "../modalVideo.scss";
// import '../modalVideo.scss'

import { FaPlayCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { deletecard, editcard } from "../Redux/action";
import History from "./History";

function Note({ title, content, id, categ , handleEdit}) {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const url = content.split('=')
  // console.log(url)
  
  return (
    <div className="note">
      <h1>{title}</h1>
      <h2>{categ}</h2>
      {/* <div>
        <ReactPlayer
       
        
         height="150px"
         controls  width="250px" url={content} />
      </div> */}
   
      <div style={{display:"flex", alignItems: "center", justifyContent:"center"}} onClick={() => setOpen(true)}>
        <FaPlayCircle size={70} />
      </div>
    
      <div className="video" >
        <ModalVideo
          
          channel="youtube"
          autoplay="true"
          isOpen={isOpen}
          videoId={url[1]}
          onClose={() => setOpen(false)}
        />
      </div>

    

      <button onClick={() => dispatch(deletecard(id))}>
        <MdDelete size={25} />
      </button>

      <button onClick={()=> handleEdit(id)}>
        <RiEditCircleFill size={25} />
      </button>
    </div>
  );
}

export default Note;
