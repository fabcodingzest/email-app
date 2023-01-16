import React from 'react'
import Text from '../common/Text'
import Chip from '../common/Chip'

const Filter = () => {
  return (
    <div className='flex items-center gap-4 pb-4'>
      <Text fontSize='text-xs' color='text-black' text='Filter By:' />
      <Chip text='All' />
      <Chip text='Unread' />
      <Chip text='Read' />
      <Chip text='Favourite' />
    </div>
  )
}

export default Filter
