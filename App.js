
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';

import Navi from './Navi';
import Footer from './Footer';
import Missing from './Missing';
import Postpage from './Postpage';
import Newpost from './Newpost';
import About from './About';
import PostLayout from './PostLayout';
import { useEffect, useState } from 'react';
import {format} from 'date-fns'

function App() {
  const navigate=useNavigate()
  const [searchResult,setSearchResult]=useState([])
  const [search,setSearch]=useState('')
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const [post,setPost]=useState([
    {
      id:1,
      title:"My first Post",
      date:"May 23 2023",
      content:'Started Html' 
    },
    {
      id:2,
      title:"My second Post",
      date:"June 23 2023",
      content:'Started inst' 
    },
    {
      id:3,
      title:"My third Post",
      date:"July 23 2023",
      content:'Started role' 
    },
    {
      id:4,
      title:"My fourth Post",
      date:"August 23 2023",
      content:'Started neo' 
    }
  ])
const handleSubmit=(e)=>{
  e.preventDefault()
  const id=post.length? post[post.length-1].id+1 :1
  const date=format(new Date(), 'dd-MM-yyyy ')
  const newpost={id,title:title,date,content:content}
  const result=[...post,newpost]
  setPost(result)
  navigate('/')
}
useEffect(()=>{
  const filteredResult=post.filter((po)=>((po.title).toLowerCase().includes(search)||(po.content).toLowerCase().includes(search)))
  setSearchResult(filteredResult.reverse())
},[post,search])

const handleDelete=(id)=>{
const postList=post.filter(post=>post.id!==id);
setPost(postList)
navigate('/')
}

  return (
   <div>
    <Navi search={search} setSearch={setSearch}/>
    <Routes>
    <Route path='/' element={<Home post={searchResult}/>} />
    
    <Route path='/Nav' element={<Navi search={search} setSearch={setSearch} />} />
    <Route path='/Post' element={<PostLayout />}>
      <Route index element={<Newpost title={title} setTitle={setTitle} content={content} setContent={setContent} handleSubmit={handleSubmit} />}/>
      <Route path=':id' element={<Postpage post={post} handleDelete={handleDelete} />} />
    </Route>
    <Route path='/Foot' element={<Footer />} />
    <Route path='/About' element={<About />} />
    <Route path='*' element={<Missing />} />
    </Routes>
   </div>
  );
}

export default App;
