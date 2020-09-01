import React from 'react'
import Markdown from 'markdown-to-jsx'
import '../assets/scss/readme.scss'

const Readme = ({ readme }) => {
  return (
    <div>
      <Markdown>{readme}</Markdown>
    </div>
  )
}

export default Readme
