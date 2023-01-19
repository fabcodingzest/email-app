import Chip from './Chip'
import Text from '../common/Text'

interface FilterProps {
  setCurrPage: React.Dispatch<React.SetStateAction<number>>
}

const Filter = ({ setCurrPage }: FilterProps) => {
  return (
    <div className='flex items-center sm:gap-2'>
      <Text fontSize='text-xs sm:text-sm' color='text-black' text='Filter By:' />
      <Chip text='All' setCurrPage={setCurrPage} />
      <Chip text='Unread' setCurrPage={setCurrPage} />
      <Chip text='Read' setCurrPage={setCurrPage} />
      <Chip text='Favourite' setCurrPage={setCurrPage} />
    </div>
  )
}

export default Filter
