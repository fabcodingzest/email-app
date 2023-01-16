import Container from './components/Layout/Container'
import EmailList from './components/Email/EmailList'
import Filter from './components/Filter/Filter'
import EmailDetails from './components/Email/EmailDetails'
import { useAppSelector } from './App/hooks'
import { useFetchEmailsQuery } from './App/services/api'
import Error from './components/common/Error'
import Loader from './components/common/Loader'

const App = () => {
  const activeEmail = useAppSelector((state) => state.email.activeEmail)
  const detailOpen = activeEmail !== ''
  const { isLoading, error } = useFetchEmailsQuery(1)

  return (
    <div className='text-secondary min-h-screen bg-[#F4F5F9] py-2 md:py-4'>
      <Container>
        {error ? (
          <Error error={error} />
        ) : (
          <>
            <Filter />
            <div className='flex gap-4'>
              {isLoading ? <Loader /> : <EmailList width={detailOpen ? 'w-2/6' : 'w-full'} />}
              {detailOpen && <EmailDetails />}
            </div>
          </>
        )}
      </Container>
    </div>
  )
}

export default App
