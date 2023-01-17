import { useDispatch } from 'react-redux'
import { removeActiveEmail } from '../../features/email/emailSlice'

const CloseBtn = () => {
  const dispatch = useDispatch()
  return (
    <button
      className='text-secondary absolute -right-1.5 -top-1.5 flex h-4 w-4  items-center justify-center rounded-full border-2 border-gray-400 bg-gray-300 p-[0.2rem] text-sm font-extrabold sm:h-6 sm:w-6 md:-right-3 md:-top-3'
      onClick={() => dispatch(removeActiveEmail())}
    >
      x
    </button>
  )
}

export default CloseBtn
