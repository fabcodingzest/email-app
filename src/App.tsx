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
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

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
