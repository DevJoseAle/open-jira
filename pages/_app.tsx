import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { lightTheme, firstTheme } from '@/themes'
import { UIProvider } from '@/context/ui'



export default function App({ Component, pageProps }: AppProps) {
  return (

    <UIProvider>
      <>
        <ThemeProvider theme={firstTheme}>
          <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
      </>
  
    </UIProvider>
  )
}
