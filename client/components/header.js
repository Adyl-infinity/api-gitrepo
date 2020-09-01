import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ username, repositoryName, user, setSearch }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={user.avatar_url} alt="" width="50" className="mr-4 rounded" />
        <span className="font-semibold text-xl tracking-tight">GITHUB</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="text-sm">
          <div className="search">
            <input
              type="text"
              className="bg-gray-200"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Main
          </Link>

          {repositoryName && (
            <Link
              to={`/${username}`}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Repositories
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
