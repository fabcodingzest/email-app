import { useState } from 'react'
import { useAppSelector } from '../../App/hooks'
import { useFetchEmailsQuery } from '../../App/services/api'
import { EMAIL_PER_PAGE } from '../../utils/constants'
import { getFilteredEmails } from '../../utils/helper'

const usePagination = () => {
  const state = useAppSelector((state) => state.email)
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
  return [currPage, setCurrPage, totalPages, currentEmails, isLoading, isFetching, error] as const
}

export default usePagination
