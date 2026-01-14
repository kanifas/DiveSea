import { RouterProvider } from 'react-router-dom'
import { router } from './router'
  import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../shared/lib/redux/store'
import { Footer, Header, CenteredBlock } from '@/shared/ui'
import './ui/styles'
import styles from './ui/styles/App.layout.module.scss'

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <div className={styles.root}>
          <header className={styles.header}>
            <CenteredBlock>
              <Header />
            </CenteredBlock>
          </header>

          <main className={styles.main}>
            <RouterProvider router={router} />
          </main>

          <footer className={styles.footer}>
            <CenteredBlock>
              <Footer />
            </CenteredBlock>
          </footer>
        </div>
      </ReduxProvider>
    </>
  )
}

export default App
