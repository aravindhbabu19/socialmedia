import React from 'react'
import { Link } from 'react-router-dom'

const Navi = ({search,setSearch}) => {
  return (
    <div>
        <form action="">
          <label >search</label>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </form>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Post'>Posts</Link></li>
            <li><Link to='/About'>About</Link></li>
        </ul>
    </div>
  )
}

export default Navi