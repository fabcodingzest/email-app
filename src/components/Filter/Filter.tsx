import React, { useState } from 'react'
import Text from '../common/Text'
import Chip from '../common/Chip'

const Filter: React.FunctionComponent = () => {
  const [activeFilter, setActiveFilter] = useState('Unread')
  return (
    <div className='flex items-center gap-4 pb-4'>
      <Text fontSize='text-xs' color='text-black' text='Filter By:' />
      <Chip text='Unread' filter={{ setActiveFilter, activeFilter }} />
      <Chip text='Read' filter={{ setActiveFilter, activeFilter }} />
      <Chip text='Favourite' filter={{ setActiveFilter, activeFilter }} />
    </div>
  )
}

export default Filter
