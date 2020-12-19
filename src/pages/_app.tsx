import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../theme'
import store from '../state'
import { SITE_TITLE } from '../const'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <FixedGlobalStyle />
      <Provider store={store}>
        <ThemeProvider>
          <ThemedGlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
