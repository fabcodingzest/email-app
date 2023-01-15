import React from 'react'
interface ProfileImageProps {
  initial: string
}
const ProfileImage: React.FunctionComponent<ProfileImageProps> = ({ initial }) => {
  return (
    <div className='w-min'>
      <div className='bg-primary flex h-8 w-8 items-center justify-center rounded-full text-white'>
        {initial}
      </div>
    </div>
  )
}

export default ProfileImage
