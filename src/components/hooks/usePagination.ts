import { useState } from 'react'
import { useAppSelector } from '../../App/hooks'
import { useFetchEmailsQuery } from '../../App/services/api'
import { EMAIL_PER_PAGE } from '../../utils/constants'
import { getFilteredEmails } from '../../utils/helper'

const usePagination = () => {
  const state = useAppSelector((state) => state.email)
  // Maintaining different states for different filters to differentiate the fetching api for all and unread and using existing state state for read and favourite
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
  // isSuccess is used to make sure its executed after fetching data is Success
  const totalResEmails = isSuccess ? data.total : 0

  // on start unread is equal to all but as we read its amount changes so wee keep a check with read array from state (e.g total was 15 but 5 are read so page number will be 15-5 = 10 so pages left would be 1 instead of 2 in start)
  const totalUnreadPages = isSuccess ? data.total - state.read.length : 0

  // Assigning pagination according to current filter state
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
  return [currPage, setCurrPage, totalPages, currentEmails, isLoading, isFetching, error] as const
}

export default usePagination
