import { useState } from "react";
import { Button } from "../buttons/Button"; 
import { MyInput } from "./MyInput";

export function MyForm ({create}) {
  const [newPost, setNewPost] = useState({title: '', body: ''});

  const addNewPost = (event) => {
    event.preventDefault();
    if (newPost.title === '') { 
      document.querySelector('.in_title').placeholder="Введи заголовок, ёпта!"      
      return;
    }
    if (newPost.body === '') { 
      document.querySelector('.in_descr').placeholder="Где описание новости, блть?!"
      return;
    }
    
    create({...newPost, id: Date.now()});
    setNewPost({title: '', body: ''});
  }

  return (
    <form className="form">
      <MyInput
        value={newPost.title}
        onChange={event => setNewPost({...newPost, title: event.target.value})}
        className="in_title" 
        type="text" 
        placeholder="Заголовок"
      />
      <MyInput 
        value={newPost.body}
        onChange={event => setNewPost({...newPost, body: event.target.value})}
        className="in_descr"
        type="text" 
        placeholder="Короткое описание"
      />
      <Button onClick={addNewPost}>Добавить</Button>
    </form>
  )
}