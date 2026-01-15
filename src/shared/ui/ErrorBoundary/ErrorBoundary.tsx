import {
  Component,
} from 'react'

interface IProps {
  children: React.ReactNode
  fallback: React.ReactNode | string
  errorMessage?: string
}

interface IState {
  hasError: boolean
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(/*error*/) {
    return { hasError: true }
  }

  // componentDidCatch(error, errorInfo) {
    // console.error("Error caught by ErrorBoundary:", error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      return <div>
        {this.props.fallback || 'Somthing went wrong'}
      </div>
    }

    return this.props.children
  }
}

export default ErrorBoundary