import React from 'react'

const Pagination = ({data, currentPage, getAllChars}) => {
  return (
    <>
      {/* Pagination */}
      {data?.content?.length > 0 && data?.totalPages > 1 && 
        <div className="pagination">
            <a onClick={() => getAllChars(currentPage - 1)} className={0 == currentPage ? 'disabled' : ''}>
                &laquo;
            </a>
            { data && [...Array(data.totalPages).keys()].map((page, index) => 
                <a onClick={() =>  getAllChars(page)} className={currentPage == page ? 'active' : ''} key={page}>
                    {page + 1}
                </a>
            )}
            <a onClick={() => getAllChars(currentPage + 1)} className={data.totalPages - 1 == currentPage ? 'disabled' : ''}>
                &raquo;
            </a>
        </div>
      }
    </>
  )
}

export default Pagination