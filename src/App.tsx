import { useState } from 'react'
import { useAppSelector } from './App/hooks'
import { useFetchEmailsQuery } from './App/services/api'
import { getFilteredEmails } from './utils/helper'
import { EMAIL_PER_PAGE } from './utils/constants'
import { Header, Container, Filter, Pagination, Loader, EmailList, EmailDetails, Footer, Error } from './components'

const App = () => {
  const state = useAppSelector((state) => state.email)
  const detailOpen = state.activeEmail !== ''
  const [queryCurrPage, setQueryCurrPage] = useState(1)
  const [othersCurrPage, setOthersCurrPage] = useState(1)
  const [unreadCurrPage, setUnreadCurrPage] = useState(1)
  const filter = state.activeFilter
  const isUnread = filter === 'unread'
  const isAllFilter = filter === 'all'
  const fetchOn = isUnread ? unreadCurrPage : queryCurrPage
  const { data, isLoading, isFetching, isSuccess, error } = useFetchEmailsQuery(fetchOn)
  const currentEmails = getFilteredEmails(state, filter)
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
    <>
      <Header text='FabMail' />
      <main className='text-secondary min-h-screen bg-[#F4F5F9]'>
        <Container styles='py-4'>
          {error ? (
            <Error error={error} />
          ) : (
            <>
              <div className='flex items-center justify-between pb-4'>
                <Filter />
                {!detailOpen && totalPages > 0 && (
                  <Pagination currPage={currPage} totalPages={totalPages} setPage={setCurrPage} />
                )}
              </div>
              <div className='flex gap-4'>
                {isLoading || isFetching ? (
                  <Loader />
                ) : (
                  <EmailList detailOpen={detailOpen} currPage={currPage} list={currentEmails} />
                )}
                {detailOpen && <EmailDetails />}
              </div>
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
