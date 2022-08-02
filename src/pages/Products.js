
import React from 'react'

function Products(props) {

  const { select } = props
  console.log('Products', select)
  return (
    <>
      <p>Product</p>
      <p> select = {select}</p>
    </>
  )
}

export default Products