import React from 'react'

const Ad = ({children}) => {
  return (
    <div className='"alert alert-primary" role="alert"'>
            {children}
    </div>
  )
}

export default Ad