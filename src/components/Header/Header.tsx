import Container from '../Layout/Container'
import Text from '../common/Text'

interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => {
  return (
    <header className='bg-primary py-2 '>
      <Container>
        <Text text={text} style='font-bold text-lg md:text-2xl' color='text-white' />
      </Container>
    </header>
  )
}

export default Header
