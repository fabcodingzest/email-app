import React from 'react'
import ProfileImage from '../common/ProfileImage'
import { Email } from './EmailList'
import Text from '../common/Text'
import { formatDate } from '../../utils/formatDate'

interface EmailCardProps {
  data: Email
}

const EmailCard: React.FunctionComponent<EmailCardProps> = ({ data }) => {
  const {
    from: { email, name },
    date,
    subject,
    short_description,
  } = data
  const favourite = true
  const formattedDate = formatDate(date)
  return (
    <div className=' border-neutral flex items-start gap-2 rounded-md border bg-white px-2 py-1  sm:px-4 sm:py-2 md:gap-4'>
      <ProfileImage initial={name[0].toUpperCase()} />
      <div className='w-5/6 sm:w-max'>
        <Text text={'From:'} spanText={`${name} <${email}>`} spanStyles='font-extrabold' />
        <Text text={'Subject:'} spanText={`${subject}`} spanStyles='font-extrabold' />
        <Text text={short_description} style='truncate' />
        <Text text={formattedDate} style='inline-block' />
        {favourite && (
          <Text text={'Favourite'} color='text-primary' style='inline-block font-bold pl-4' />
        )}
      </div>
    </div>
  )
}

export default EmailCard
