import { useState } from 'react'
import Container from './components/Layout/Container'
import EmailList from './components/Email/EmailList'
import Filter from './components/Filter/Filter'
import EmailDetails from './components/Email/EmailDetails'

const App = () => {
  const [detailActive, setDetailActive] = useState('')
  const detailOpen = detailActive !== ''
  return (
    <div className='text-secondary bg-[#F4F5F9] py-2 md:py-4'>
      <Container>
        <Filter />
        <div className='flex gap-4'>
          <EmailList
            details={{ detailActive, setDetailActive }}
            width={detailOpen ? 'w-2/6' : 'w-full'}
          />
          {detailOpen && <EmailDetails />}
        </div>
      </Container>
    </div>
  )
}

export default App
