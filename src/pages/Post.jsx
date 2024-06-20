import React, { useEffect, useMemo, useState } from "react";
import './style/App.css';
import PostList from "./component/postList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";
import MyModel from "./component/UI/MyModal/MyModel";
import MyButton from "./component/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./component/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageArray, getPageCount } from "./util/pages";
import Pagination from "./component/UI/pagination/Pagination";

function Post() {
  
const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort:'', query:''})
const [model, setModel] = useState(false)
const [totalPages, setTotalPages]=useState(0)
const [limit, setLimit]=useState(10)
const [page, setPage]=useState(1)
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)



const [fetchPosts, isPostLoading, postError] = useFetching(async ()=>{
  const response = await PostService.getAll(limit, page)
  setPosts(response.data)
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit))
})

useEffect(()=>{
  fetchPosts()
}, [page])

  /*ПОлучаем post из дочернего компонента */
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

const changePage = (page) => {
  setPage(page)
}



  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>
          get posts
      </MyButton>
      <MyButton style={{marginTop:30}} onClick={()=>setModel(true)}>
        Create user
      </MyButton>
      <MyModel visible={model} setVisible={setModel}>         
        <PostForm create ={createPost}/>
      </MyModel>
      <hr style={{margin:'15px'}}/>
      <PostFilter 
        filter ={filter}
        setFilter = {setFilter}
      />
      {postError &&
        <h1>Error message: ${postError}</h1>
      }
      {isPostLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
      :<PostList remove={removePost} posts={sortedAndSearchedPosts} title='spisoc postov JS' />
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
    

  );
}

export default Post;
