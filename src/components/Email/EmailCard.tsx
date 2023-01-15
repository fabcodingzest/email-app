import React, { KeyboardEventHandler, SyntheticEvent } from 'react'
import ProfileImage from '../common/ProfileImage'
import { Email } from './EmailList'
import Text from '../common/Text'
import { formatDate } from '../../utils/formatDate'

interface EmailCardProps {
  data: Email
  details: {
    detailActive: string
    setDetailActive: React.Dispatch<React.SetStateAction<string>>
  }
}

const EmailCard: React.FunctionComponent<EmailCardProps> = ({ data, details }) => {
  const {
    id,
    from: { email, name },
    date,
    subject,
    short_description,
  } = data
  const { detailActive, setDetailActive } = details
  const favourite = true
  const formattedDate = formatDate(date)
  console.log(detailActive)
  const isActive = detailActive !== '' && detailActive === id
  const setOpenDetail = () => {
    setDetailActive(id)
  }
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault()
    setOpenDetail()
  }
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter') {
      setOpenDetail()
    }
  }
  return (
    <div
      className={`border-neutral flex cursor-pointer items-start gap-2 rounded-md border bg-white px-2 py-1 sm:px-4 sm:py-2 md:gap-4 ${
        isActive ? 'border-primary' : 'border-neutral'
      }`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role='button'
      tabIndex={0}
    >
      <ProfileImage initial={name[0].toUpperCase()} />
      <div className='w-5/6'>
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
