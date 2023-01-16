import { useAppSelector } from '../../App/hooks'
import { Email } from '../../App/services/api'
import { getFilteredEmails } from '../../utils/helper'
import EmailCard from './EmailCard'

interface EmailListProps {
  width: string
}

const EmailList = ({ width }: EmailListProps) => {
  const state = useAppSelector((state) => state.email)
  const filter = useAppSelector((state) => state.email.activeFilter)
  const currentEmails = getFilteredEmails(state, filter)

  return (
    <div className={`flex flex-col gap-4 ${width}`}>
      {currentEmails.length === 0 ? (
        <p>No {filter} emails</p>
      ) : (
        currentEmails.map((email: Email) => <EmailCard key={email.id} data={email} />)
      )}
    </div>
  )
}

export default EmailList
