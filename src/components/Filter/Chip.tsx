import React from 'react'
import { useAppSelector } from '../../App/hooks'
import { useDispatch } from 'react-redux'
import { setActiveFilter } from '../../features/email/emailSlice'

interface ChipProps {
  text: string
}

const Chip = ({ text }: ChipProps) => {
  const filter = useAppSelector((state) => state.email.activeFilter)
  const dispatch = useDispatch()

  return (
    <button
      className={`rounded-full border px-2 py-[0.1rem] text-xs  ${
        filter === text.toLowerCase()
          ? 'bg-btn border-neutral text-secondary'
          : 'border-transparent text-black'
      }`}
      onClick={() => dispatch(setActiveFilter(text.toLowerCase()))}
    >
      {text}
    </button>
  )
}

export default Chip
