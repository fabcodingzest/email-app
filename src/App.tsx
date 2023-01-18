import { useAppSelector } from './App/hooks'
import {
  Header,
  Container,
  Filter,
  Pagination,
  Loader,
  EmailList,
  EmailDetails,
  Footer,
  Error,
} from './components'
import usePagination from './components/hooks/usePagination'

const App = () => {
  const activeEmail = useAppSelector((state) => state.email.activeEmail)
  const detailOpen = activeEmail !== ''
  const [currPage, setCurrPage, totalPages, currentEmails, isLoading, isFetching, error] =
    usePagination()

  return (
    <>
      <Header text='FabMail' />
      <main className='text-secondary min-h-screen bg-[#F4F5F9]'>
        <Container styles='py-4'>
          {error ? (
            <Error error={error} />
          ) : (
            <>
              <div className='flex items-center justify-between pb-4'>
                <Filter />
                {!detailOpen && totalPages > 0 && (
                  <Pagination currPage={currPage} totalPages={totalPages} setPage={setCurrPage} />
                )}
              </div>
              <div className='flex gap-4'>
                {isLoading || isFetching ? (
                  <Loader />
                ) : (
                  <EmailList detailOpen={detailOpen} currPage={currPage} list={currentEmails} />
                )}
                {detailOpen && <EmailDetails />}
              </div>
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
