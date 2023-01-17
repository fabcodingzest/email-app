import { useDispatch } from 'react-redux'
import { removeActiveEmail } from '../../features/email/emailSlice'

const CloseBtn = () => {
  const dispatch = useDispatch()
  return (
    <button
      className='text-secondary absolute -right-2 -top-2 flex h-6 w-6  items-center justify-center rounded-full border-2 border-gray-400 bg-gray-300 p-[0.2rem] text-sm font-extrabold md:-right-3 md:-top-3'
      onClick={() => dispatch(removeActiveEmail())}
    >
      x
    </button>
  )
}

export default CloseBtn
