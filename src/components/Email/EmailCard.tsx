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
    <div className=' border-neutral flex items-start gap-4 rounded-md border bg-white px-4 py-2'>
      <ProfileImage initial={name[0].toUpperCase()} />
      <div>
        <Text text={'From:'} spanText={`${name} <${email}>`} spanStyles='font-extrabold' />
        <Text text={'Subject:'} spanText={`${subject}`} spanStyles='font-extrabold' />
        <Text text={short_description} />
        <Text text={formattedDate} style='inline-block' />
        {favourite && (
          <Text text={'Favourite'} color='text-primary' style='inline-block font-bold pl-4' />
        )}
      </div>
    </div>
  )
}

export default EmailCard
