import { useAppSelector } from '../../App/hooks'
import { Email } from '../../App/services/api'
import { EMAIL_PER_PAGE } from '../../utils/constants'
import EmailCard from './EmailCard'

interface EmailListProps {
  list: Email[]
  currPage: number
  detailOpen: boolean
}

const EmailList = ({ list, currPage, detailOpen }: EmailListProps) => {
  const filter = useAppSelector((state) => state.email.activeFilter)
  const indexOfLastEmail = currPage * EMAIL_PER_PAGE
  const indexOfFirstEmail = indexOfLastEmail - EMAIL_PER_PAGE
  const currentEmails = list.slice(indexOfFirstEmail, indexOfLastEmail)
  return (
    <section className={`flex flex-col gap-4 ${detailOpen ? 'hidden md:flex md:w-2/6' : 'w-full'}`}>
      {list.length === 0 ? (
        <p>No {filter} emails</p>
      ) : (
        currentEmails.map((email: Email) => <EmailCard key={email.id} data={email} />)
      )}
    </section>
  )
}

export default EmailList
