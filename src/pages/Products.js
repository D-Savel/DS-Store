
import React from "react"

function Products(props) {

  const { select } = props
  return (
    <>
      <p>Product</p>
      <p> Select = {select}</p>
    </>
  )
}

export default Products