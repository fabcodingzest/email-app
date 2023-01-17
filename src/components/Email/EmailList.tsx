import { useAppSelector } from '../../App/hooks'
import { Email } from '../../App/services/api'
import { EMAIL_PER_PAGE } from '../../utils/constants'
import EmailCard from './EmailCard'

interface EmailListProps {
  width: string
  list: Email[]
  currPage: number
}

const EmailList = ({ list, width, currPage }: EmailListProps) => {
  const filter = useAppSelector((state) => state.email.activeFilter)
  const indexOfLastEmail = currPage * EMAIL_PER_PAGE
  const indexOfFirstEmail = indexOfLastEmail - EMAIL_PER_PAGE
  const currentEmails = list.slice(indexOfFirstEmail, indexOfLastEmail)
  return (
    <div className={`flex flex-col gap-4 ${width}`}>
      {list.length === 0 ? (
        <p>No {filter} emails</p>
      ) : (
        currentEmails.map((email: Email) => <EmailCard key={email.id} data={email} />)
      )}
    </div>
  )
}

export default EmailList
