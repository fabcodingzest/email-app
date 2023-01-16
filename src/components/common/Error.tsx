import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

interface ErrorProps {
  error: FetchBaseQueryError | SerializedError | undefined
}

const Error = ({ error }: ErrorProps) => {
  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return (
        <>
          <h1>An error has occurred:</h1>
          <h3>{errMsg}</h3>
        </>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return <h1>{error.message}</h1>
    }
  }
  return <h1>Oops Something went wrong...</h1>
}

export default Error
