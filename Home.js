import React from 'react'
import Feed from './Feed'

const Home = ({post}) => {
  return (
    <div>
        {
            post.length? (
                <Feed post={post}/>
            ):(
                <h3>No Post Found</h3>
            )
        }
    </div>
  )
}

export default Home