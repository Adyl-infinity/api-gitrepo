import React from 'react'
import { Link } from 'react-router-dom'
import Moonloader from 'react-spinners/MoonLoader'

const RepoList = ({ repos, username, search }) => {
  const filteredRepos = repos.filter((el) => el.name.includes(search))
  if (!repos.length) {
    return (
      <div className="flex justify-center mt-32">
        <Moonloader />
      </div>
    )
  }
  return (
    <div className="bg-teal-400 h-screen">
      <div>
        <div className="flex">
          <div className="w-1/3 border-solid border-4 border-gray-600 mr-px rounded-md border bg-teal-400 flex justify-center">
            Repository Name
          </div>
          <div className="w-1/3 border-solid border-4 border-gray-600 mr-px rounded-md border bg-teal-400 flex justify-center">
            Forks
          </div>
          <div className="w-1/3 border-solid border-4 border-gray-600 rounded-md border bg-teal-400 flex justify-center">
            View Readme
          </div>
        </div>
        {filteredRepos.map((el) => (
          <div key={el.name} className="flex">
            <div className="w-1/3 ml-3">{el.name}</div>
            <div className="w-1/3 flex justify-center">{el.forks}</div>
            <div className="w-1/3 flex justify-center">
              <Link to={`/${username}/${el.name}`}>GET</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RepoList
