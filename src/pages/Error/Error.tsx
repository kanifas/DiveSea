import { CenteredBlock } from '@/shared/ui'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText
  } else {
    errorMessage = 'Unknown error'
  }

  return (
    <>
      <CenteredBlock>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{errorMessage}</i>
          </p>
        </div>
      </CenteredBlock>
    </>
  )
}

export default Error