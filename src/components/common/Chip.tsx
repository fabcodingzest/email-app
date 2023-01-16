import React from 'react'

interface ChipProps {
  text: string
  filter: {
    setActiveFilter: React.Dispatch<React.SetStateAction<string>>
    activeFilter: string
  }
}

const Chip = ({ text, filter: { activeFilter, setActiveFilter } }: ChipProps) => {
  return (
    <button
      className={`rounded-full border px-2 py-[0.1rem] text-xs  ${
        activeFilter === text
          ? 'bg-btn border-neutral text-secondary'
          : 'border-transparent text-black'
      }`}
      onClick={() => setActiveFilter(text)}
    >
      {text}
    </button>
  )
}

export default Chip
