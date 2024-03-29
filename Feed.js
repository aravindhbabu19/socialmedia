import React from 'react'
import Posts from './Posts'

const Feed = ({post}) => {
  return (
    <div>
        {
            post.map((po)=>(
                <Posts po={po} />
            ))
        }
    </div>
  )
}

export default Feed