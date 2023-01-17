import { Dispatch } from 'react'

interface PaginationProps {
  currPage: number
  totalPages: number
  setPage: Dispatch<React.SetStateAction<number>>
}
interface PageBtnProps {
  direction: string
  onClick: () => void
}
const PageBtn = ({ onClick, direction }: PageBtnProps) => {
  const next = direction === 'next'

  return (
    <button
      className={'flex h-5 w-5 items-center justify-center rounded-full '}
      onClick={() => onClick()}
    >
      <span
        className={`h-0 w-0 border-x-8 border-b-[16px] border-x-transparent border-b-black ${
          next ? 'rotate-90' : '-rotate-90'
        }`}
      ></span>
    </button>
  )
}

const Pagination = ({ currPage, totalPages, setPage }: PaginationProps) => {
  const nextPage = () => {
    if (currPage !== totalPages) setPage(currPage + 1)
  }
  const prevPage = () => {
    if (currPage !== 1) setPage(currPage - 1)
  }
  return (
    <div className='flex items-center gap-4 pb-2'>
      <PageBtn direction='prev' onClick={prevPage} />
      {currPage} of {totalPages}
      <PageBtn direction='next' onClick={nextPage} />
    </div>
  )
}

export default Pagination
