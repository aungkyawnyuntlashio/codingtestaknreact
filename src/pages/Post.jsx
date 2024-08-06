import React from 'react'
import withAuthHOC from '../util/withAuthHOC';

function Post() {
  return (
    <div>Post</div>
  )
}

export default withAuthHOC(Post);