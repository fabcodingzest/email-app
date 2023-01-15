import Container from './components/Layout/Container'
import EmailList from './components/Email/EmailList'
import Filter from './components/Filter/Filter'

function App() {
  return (
    <div className='text-secondary bg-[#F4F5F9] py-2 md:py-4'>
      <Container>
        <Filter />
        <EmailList />
      </Container>
    </div>
  )
}

export default App
