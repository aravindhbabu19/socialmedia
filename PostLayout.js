import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <div>
        <Link to='/Post/1'>Post1</Link><br />
       <Link to='/Post/2'>Post2</Link><br />
       <Link to='/Post/3'>Post3</Link><br />
       <Link to='/Post'>New Post</Link>
       <Outlet />
    </div>
  )
}

export default PostLayout