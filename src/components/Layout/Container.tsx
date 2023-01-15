import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
  return <div className='container  mx-auto max-w-4xl p-8'>{children}</div>
}

export default Container
