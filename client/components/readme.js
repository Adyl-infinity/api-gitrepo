import React from 'react'
import Markdown from 'markdown-to-jsx'

const Readme = ({ readme }) => {
  return (
    <div>
      <Markdown>{readme}</Markdown>
    </div>
  )
}

export default Readme
