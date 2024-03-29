import React from 'react'
import { useParams } from 'react-router-dom'


const Postpage = ({post,handleDelete}) => {
  const {id}=useParams()
  const posts=post.find(po=>(po.id).toString()===id)
  return (
    <div>
      {
        posts&&
        <>
        <h1>{posts.title}</h1>
        <h3>{posts.date}</h3>
        <p>{posts.content}</p>
        <button onClick={()=>handleDelete(posts.id)}>Delete Post</button>
        </>
      }
      {
        !posts&&
        <>
        <h2>No post found</h2>
        <p>please go to home page</p>
        </>
      }
    </div>
  )
}

export default Postpage