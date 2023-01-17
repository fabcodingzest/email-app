import Container from './components/Layout/Container'
import EmailList from './components/Email/EmailList'
import Filter from './components/Filter/Filter'
import EmailDetails from './components/Email/EmailDetails'
import { useAppSelector } from './App/hooks'
import { useFetchEmailsQuery } from './App/services/api'
import Error from './components/common/Error'
import Loader from './components/common/Loader'
import { useState } from 'react'
import Pagination from './components/common/Pagination'
import { getFilteredEmails } from './utils/helper'

export const EMAIL_PER_PAGE = 10

const App = () => {
  const [queryCurrPage, setQueryCurrPage] = useState(1)
  const [arrayCurrPage, setArrCurrPage] = useState(1)
  const { data, isLoading, isFetching, isSuccess, error } = useFetchEmailsQuery(queryCurrPage)
  const state = useAppSelector((state) => state.email)
  const filter = state.activeFilter
  const currentEmails = getFilteredEmails(state, filter)
  const detailOpen = state.activeEmail !== ''
  const isAllFilter = ['all', 'unread'].includes(filter)
  const totalPages = Math.ceil(
    (isSuccess && isAllFilter ? data?.total : currentEmails.length) / EMAIL_PER_PAGE,
  )
  const currPage = isAllFilter ? queryCurrPage : arrayCurrPage
  const setCurrPage = isAllFilter ? setQueryCurrPage : setArrCurrPage

  return (
    <div className='text-secondary min-h-screen bg-[#F4F5F9] py-2 md:py-4'>
      <Container>
        {error ? (
          <Error error={error} />
        ) : (
          <>
            <div className='flex items-center justify-between'>
              <Filter />
              {!detailOpen && totalPages > 0 && (
                <Pagination currPage={currPage} totalPages={totalPages} setPage={setCurrPage} />
              )}
            </div>
            <div className='flex gap-4'>
              {isLoading || isFetching ? (
                <Loader />
              ) : (
                <EmailList
                  currPage={currPage}
                  list={currentEmails}
                  width={detailOpen ? 'w-2/6' : 'w-full'}
                />
              )}
              {detailOpen && <EmailDetails />}
            </div>
          </>
        )}
      </Container>
    </div>
  )
}

export default App
