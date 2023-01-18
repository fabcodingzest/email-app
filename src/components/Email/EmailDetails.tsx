import sanitizeHtml from 'sanitize-html'
import { useDispatch } from 'react-redux'
import { formatDate } from '../../utils/helper'
import { useAppSelector } from '../../App/hooks'
import { useFetchDetailsQuery } from '../../App/services/api'
import { CloseBtn, Loader, Error, Text, Profileimage } from '..'
import { addToFavourite, removeFavourite } from '../../features/email/emailSlice'

const EmailDetails = () => {
  const { activeEmail, allEmails, favourite } = useAppSelector((state) => state.email)
  const {
    data: emailBody,
    isLoading,
    isFetching,
    isSuccess,
    error,
  } = useFetchDetailsQuery(activeEmail)
  const dispatch = useDispatch()
  const [emailDetails] = allEmails.filter((email) => email.id === activeEmail)
  const isFav = favourite.includes(activeEmail)
  const formattedDate = formatDate(emailDetails.date)

  if (isLoading || isFetching) {
    return <Loader />
  }

  return (
    <section className='border-neutral relative flex h-max w-full items-start gap-2 rounded-md border bg-white p-4 sm:gap-4'>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <CloseBtn />
          <Profileimage initial={'F'} />
          <div className='flex flex-col gap-3'>
            <div className='flex items-start justify-between'>
              <h2 className='text-md font-bold sm:text-xl'>{emailDetails.subject}</h2>
              <button
                className='bg-primary rounded-full px-2 py-1 text-xs text-white'
                onClick={() => {
                  if (isFav) {
                    dispatch(removeFavourite(activeEmail))
                  } else {
                    dispatch(addToFavourite(activeEmail))
                  }
                }}
              >
                {isFav ? 'Remove from Fav' : 'Mark as favorite'}
              </button>
            </div>
            <Text fontSize='text-xs' text={formattedDate} />
            {isSuccess && (
              <div
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(emailBody.body) }}
                className='text-sm'
              />
            )}
          </div>
        </>
      )}
    </section>
  )
}

export default EmailDetails
