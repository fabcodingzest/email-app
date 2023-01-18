import Chip from './Chip'
import Text from '../common/Text'

const Filter = () => {
  return (
    <div className='flex items-center  gap-1 sm:gap-2'>
      <Text fontSize='text-xs sm:text-sm' color='text-black' text='Filter By:' />
      <Chip text='All' />
      <Chip text='Unread' />
      <Chip text='Read' />
      <Chip text='Favourite' />
    </div>
  )
}

export default Filter
