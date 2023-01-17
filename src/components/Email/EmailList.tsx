import { EMAIL_PER_PAGE } from '../../App'
import { useAppSelector } from '../../App/hooks'
import { Email } from '../../App/services/api'
import EmailCard from './EmailCard'

interface EmailListProps {
  width: string
  list: Email[]
  currPage: number
}

const EmailList = ({ list, width, currPage }: EmailListProps) => {
  const filter = useAppSelector((state) => state.email.activeFilter)
  const indexOfLastRecord = currPage * EMAIL_PER_PAGE
  const indexOfFirstRecord = indexOfLastRecord - EMAIL_PER_PAGE
  const currentRecords = list.slice(indexOfFirstRecord, indexOfLastRecord)
  return (
    <div className={`flex flex-col gap-4 ${width}`}>
      {list.length === 0 ? (
        <p>No {filter} emails</p>
      ) : (
        currentRecords.map((email: Email) => <EmailCard key={email.id} data={email} />)
      )}
    </div>
  )
}

export default EmailList
