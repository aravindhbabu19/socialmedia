import React from 'react'
import { Link} from 'react-router-dom'

const Post = (post) => {
  return (
    <div>
       <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <h3>{post.date}</h3>
       </Link>
    </div>
  )
}

export default Post