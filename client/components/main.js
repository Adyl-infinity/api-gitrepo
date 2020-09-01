import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/GitHub-Mark-120px-plus.png'

const Main = () => {
  const [username, setUsername] = useState('')
  return (
    <div className="h-screen bg-teal-400 flex justify-center items-center rounded-lg">
      <img src={logo} alt="" width="50" className="mr-4" />
      <div className="bg-white p-6 rounded-lg">
        <input
          type="text"
          className="bg-gray-400 mr-3 rounded-md"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Link to={`/${username}`}>View</Link>
      </div>
    </div>
  )
}

export default Main
