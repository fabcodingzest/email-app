import ProfileImage from '../common/ProfileImage'
import Text from '../common/Text'
import { formatDate } from '../../utils/helper'
import sanitizeHtml from 'sanitize-html'
import { useFetchDetailsQuery } from '../../App/services/api'
import { useAppSelector } from '../../App/hooks'

const EmailDetails = () => {
  const activeEmail = useAppSelector((state) => state.email.activeEmail)
  const { data: emailBody, isLoading, isSuccess } = useFetchDetailsQuery(activeEmail)
  console.log(emailBody)
  const allEmails = useAppSelector((state) => state.email.allEmails)
  const [emailDetails] = allEmails.filter((email) => email.id === activeEmail)
  const formattedDate = formatDate(emailDetails.date)

  if (isLoading) {
    return <p>JAMASHIMA WAIT A MINUTE ....</p>
  }

  return (
    <div className='border-neutral flex w-full items-start gap-4 rounded-md border bg-white p-4'>
      <ProfileImage initial={'F'} />
      <div className='flex flex-col gap-3'>
        <div className='flex items-start justify-between'>
          <Text fontSize='text-xl' text={emailDetails.subject} style='font-bold' />
          <button className='bg-primary rounded-full px-2 py-1 text-xs text-white'>
            Mark as favorite
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
    </div>
  )
}

export default EmailDetails
