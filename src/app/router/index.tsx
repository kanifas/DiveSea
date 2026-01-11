import { createBrowserRouter } from 'react-router-dom'
import {
  Main,
  Error
} from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />
  }
])