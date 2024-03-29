import React from 'react'


const Posts = ({po}) => {
  return (
    <div>
        <h2>{po.title}</h2>
        <h4>{po.date}</h4>
        <p>{po.content}</p>
    </div>
  )
}

export default Posts
