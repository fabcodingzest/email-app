import { Dispatch } from 'react'
import Text from './Text'

interface PaginationProps {
  currPage: number
  totalPages: number
  setPage: Dispatch<React.SetStateAction<number>>
}
interface PageBtnProps {
  direction: string
  onClick: React.MouseEventHandler
  disabled: boolean
}
const PageBtn = ({ onClick, direction, disabled }: PageBtnProps) => {
  const isNext = direction === 'next'
  console.log(disabled)
  return (
    <button
      className={
        'flex h-1 w-1 items-center justify-center rounded-full active:translate-y-[0.05rem] disabled:opacity-25 md:h-4 md:w-4'
      }
      disabled={disabled}
      onClick={onClick}
    >
      <span
        className={`h-0 w-0 border-x-8 border-b-[0.5rem] border-x-transparent border-b-black ${
          isNext ? 'rotate-90' : '-rotate-90'
        }`}
      ></span>
    </button>
  )
}

const Pagination = ({ currPage, totalPages, setPage }: PaginationProps) => {
  const haveNext = currPage !== totalPages
  const havePrev = currPage !== 1
  const nextPage = () => {
    if (haveNext) setPage(currPage + 1)
  }
  const prevPage = () => {
    if (havePrev) setPage(currPage - 1)
  }
  return (
    <div className='flex items-center gap-2'>
      <PageBtn direction='prev' onClick={prevPage} disabled={!havePrev} />
      <Text text={`${currPage} of ${totalPages}`} style='text-xs text-sm' />
      <PageBtn direction='next' onClick={nextPage} disabled={!haveNext} />
    </div>
  )
}

export default Pagination
