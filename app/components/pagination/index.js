import React from 'react'
import './pagination.less'

const createPages = (count, start) => {

  console.log(count, start);
  return Array(Math.abs(count))
    .fill(null)
    .map((item, i) => start + i + 1)
}

export default props => {
  const { setPage, activePage, lastPage, startPage = 1 } = props

  const pagesCount = lastPage - startPage + 1
  const visibleMaximum = 4

  const handlePrevious = () => {
    if (activePage === 1) return null
    setPage(activePage - 1)
  }

  const handleNext = () => {
    if (activePage === lastPage) return null
    setPage(activePage + 1)
  }
  const pages = pagesCount > visibleMaximum
      ? createPages(visibleMaximum, startPage - 1)
      : createPages(pagesCount, startPage - 1)


  return (
    <div className="pagination section">
      <div
        className={
          activePage === 1
            ? 'pagination__previous--inactive'
            : 'pagination__previous'
        }
        onClick={handlePrevious}
      >
        <img
          className="pagination__arrow-icon"
          src={require('./images/arrow-left.svg')}
          alt="previous page"
        /> {' '} previous
      </div>
      <div className="pagination__pages">
        {pages.map(page => (
          <div
            className={
              activePage === page
                ? 'pagination__page--active'
                : 'pagination__page'
            }
            onClick={() => setPage(page)}
            key={page}
          >
            {page}
          </div>
        ))}
        {pagesCount > visibleMaximum && (
          <div className="pagination__pages-separator">...</div>
        )}
        {pagesCount > visibleMaximum && (
          <div
            className={
              activePage === lastPage
                ? 'pagination__page--active'
                : 'pagination__page'
            }
            onClick={() => setPage(lastPage)}
          >
            {lastPage}
          </div>
        )}
      </div>
      <div
        className={
          activePage === lastPage
            ? 'pagination__next--inactive'
            : 'pagination__next'
        }
        onClick={handleNext}
      >
        next {' '} <img
          className="pagination__arrow-icon"
          src={require('./images/arrow-right.svg')}
          alt="next page"
        />
      </div>
    </div>
  )
}
