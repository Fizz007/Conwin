import React, { useEffect, useState } from "react";

import { IoIosAdd } from "react-icons/io";
import { MdOutlineUpdate } from "react-icons/md";

import { useDispatch } from "react-redux";
import { addcard, editcard } from "../Redux/action";
// import Iframe from "react-iframe";

function CreateArea({ edit, togg, setEdit }) {
  const [isOpen, setOpen] = useState(false);
  // console.log(edit.editItem.title)

  const dispatch = useDispatch();


  const [note, setNote] = useState({
    title: "",
    categories: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleChangeEdit(e){
    const { name, value } = e.target;
    setEdit((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function submitButton(event) {
    event.preventDefault();
    dispatch(addcard(note));

    setNote({
      title: "",
      categories: "",
      content: "",
    });
    // onAdd(note);
  }

  function handleEditSubmit(e){
    e.preventDefault();
    dispatch(editcard(edit))
  }

  return (
    <>
      {togg === true ? (
        <form>
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <input
            value={note.categories}
            type="text"
            placeholder="Categories"
            name="categories"
            onChange={handleChange}
          />

          <p>
            <input
              type="url"
              value={note.content}
              name="content"
              placeholder="Paste a youtube video link"
              onChange={handleChange}
            />
          </p>

          <button onClick={submitButton}>
            <IoIosAdd size={35} />
          </button>
        </form>
      ) : (
        <form>
          <input
            value={edit}
            type="text"
            placeholder="Title"
            name="title"
            
            onChange={handleChangeEdit}
          />
          <input
            value={edit}
            type="text"
            placeholder="Categories"
            name="categories"
            onChange={handleChangeEdit}
          />

          <p>
            <input
              type="url"
              value={edit}
              name="content"
              placeholder="Paste a youtube video link"
              onChange={handleChangeEdit}
            />
          </p>

          <button onClick={handleEditSubmit}>
            <MdOutlineUpdate size={35} />
          </button>
        </form>
      )}
    </>
  );
}

export default CreateArea;
