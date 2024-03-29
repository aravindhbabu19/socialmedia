import React from 'react'

const Newpost = ({handleSubmit,title,setTitle,content,setContent}) => {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
          <label htmlFor="content">Content</label>
          <input type="text" id='content' value={content} onChange={(e)=>setContent(e.target.value)} />
          <button type='submit'>post</button>
        </form>
    </div>
  )
}

export default Newpost