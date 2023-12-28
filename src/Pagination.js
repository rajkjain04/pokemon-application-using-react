import React from 'react'

export default function Pagination( {gotoNextPage, gotoPreviousPage}) {
  return (
    <div>
      {gotoPreviousPage && <button onClick={gotoPreviousPage}>Previous Page</button>} 
      {gotoNextPage && <button onClick={gotoNextPage}>Next Page</button>} 
    </div>
  )
}
