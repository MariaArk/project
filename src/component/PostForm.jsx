import React, { useState } from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';


export default function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }


  return (
    <form>
        {/*управляемый элеменр*/}
        <MyInput
          value = {post.title}
          onChange ={e=>setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Name post"
        />
       { /****неуправляемый элемен ****/}
        <MyInput 
          value = {post.body}
          onChange = {e=>setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Name post"
        />
        <MyButton onClick={addNewPost}>Create Button</MyButton> {/*/ type="submit" добавить это если нужноо тправит ьданные на сервер*/}
      </form>
  )
}
