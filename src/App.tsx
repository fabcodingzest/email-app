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
import { EMAIL_PER_PAGE } from './utils/constants'

const App = () => {
  const state = useAppSelector((state) => state.email)
  const filter = state.activeFilter
  const [queryCurrPage, setQueryCurrPage] = useState(1)
  const [othersCurrPage, setOthersCurrPage] = useState(1)
  const [unreadCurrPage, setUnreadCurrPage] = useState(1)
  const isUnread = filter === 'unread'
  const fetch = isUnread ? unreadCurrPage : queryCurrPage
  const { data, isLoading, isFetching, isSuccess, error } = useFetchEmailsQuery(fetch)
  const currentEmails = getFilteredEmails(state, filter)
  const detailOpen = state.activeEmail !== ''
  const isAllFilter = filter === 'all'
  const totalCurrentEmails = currentEmails.length
  const totalResEmails = isSuccess ? data.total : 0
  const totalUnreadPages = isSuccess ? data.total - state.read.length : 0
  const totalPages = Math.ceil(
    (isUnread ? totalUnreadPages : isAllFilter ? totalResEmails : totalCurrentEmails) /
      EMAIL_PER_PAGE,
  )
  const currPage = isUnread ? unreadCurrPage : isAllFilter ? queryCurrPage : othersCurrPage
  const setCurrPage = isUnread
    ? setUnreadCurrPage
    : isAllFilter
    ? setQueryCurrPage
    : setOthersCurrPage

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
