import React from 'react'

const selectorOptionsQty = (maxLimit) => {
  return [...Array(maxLimit).keys()].map(i => 
    <>
      <option key = {i+1} value = {i+1}>{i+1}</option>
    </>    
  )
}

export default selectorOptionsQty;