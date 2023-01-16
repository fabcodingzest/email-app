import { KeyboardEventHandler, SyntheticEvent } from 'react'
import ProfileImage from '../common/ProfileImage'
import Text from '../common/Text'
import { formatDate } from '../../utils/helper'
import { useAppDispatch, useAppSelector } from '../../App/hooks'
import { addToRead, setActiveEmail } from '../../features/email/emailSlice'
import { Email } from '../../App/services/api'

interface EmailCardProps {
  data: Email
}

const EmailCard = ({ data }: EmailCardProps) => {
  const {
    id,
    from: { email, name },
    date,
    subject,
    short_description,
  } = data
  const activeEmail = useAppSelector((state) => state.email.activeEmail)
  const readEmails = useAppSelector((state) => state.email.read)
  const dispatch = useAppDispatch()
  const isRead = readEmails.includes(id)
  const favourite = true
  const formattedDate = formatDate(date)
  const isActive = activeEmail !== '' && activeEmail === id
  const setOpenDetail = () => {
    dispatch(setActiveEmail(id))
    !isRead && dispatch(addToRead(id))
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
      className={`border-neutral flex cursor-pointer items-start gap-2 rounded-md border px-2 py-1 sm:px-4 sm:py-2 md:gap-4 ${
        isActive ? 'border-primary' : 'border-neutral'
      } ${isRead ? 'bg-light' : 'bg-white '}`}
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
