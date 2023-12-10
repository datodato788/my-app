import React from 'react'

function Category({params}) {

  console.log(params)
  return (
    <div>{params.category}</div>
  )
}

export default Category