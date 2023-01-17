import React from 'react'
import Text from '../common/Text'
import Chip from './Chip'

const Filter = () => {
  return (
    <div className='flex items-center md:gap-2'>
      <Text fontSize='text-xs' color='text-black' text='Filter By:' />
      <Chip text='All' />
      <Chip text='Unread' />
      <Chip text='Read' />
      <Chip text='Favourite' />
    </div>
  )
}

export default Filter
