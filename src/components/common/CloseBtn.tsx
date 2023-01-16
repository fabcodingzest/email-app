import { useDispatch } from 'react-redux'
import { removeActiveEmail } from '../../features/email/emailSlice'

const CloseBtn = () => {
  const dispatch = useDispatch()
  return (
    <button
      className='absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-500 bg-gray-300 p-[0.2rem] text-sm font-extrabold'
      onClick={() => dispatch(removeActiveEmail())}
    >
      x
    </button>
  )
}

export default CloseBtn
