import Container from '../Layout/Container'
import Text from '../common/Text'

interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => {
  return (
    <header className='bg-primary py-2 '>
      <Container>
        <h1 className='text-md font-bold text-white sm:text-xl'>{text}</h1>
      </Container>
    </header>
  )
}

export default Header
