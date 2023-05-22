import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { lightTheme, firstTheme } from '@/themes'



export default function App({ Component, pageProps }: AppProps) {
  return (
   <ThemeProvider theme={firstTheme}>
    <CssBaseline/>
      <Component {...pageProps} />
   </ThemeProvider>
  
  )
}
