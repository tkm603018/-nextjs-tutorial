import React from 'react'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {CssBaseline} from '@material-ui/core'
import NewAppBar from '../components/newAppBar'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {

  // React.useEffect(() => {
  // const jssStyles = document.querySelector('#jss-server-side');
  // if (jssStyles) {
  //   jssStyles.parentElement?.removeChild(jssStyles);
  // }
  // }, []);
  
  const [themeStatus, setThemeStatus] = React.useState(true)
  console.log("themeStatus", themeStatus)

  const muiTheme = createMuiTheme({
    palette: {
      type: themeStatus === true ? 'dark': 'light',
    },
  });

  const handleThemeChange = (e) => {
    setThemeStatus(e.target.checked)
  }

  
  return (
    <div>
      <ThemeProvider theme={muiTheme} className="Header-main">
        <CssBaseline />
        <NewAppBar
          themeStatus={themeStatus}
          handleThemeChange={handleThemeChange}
        >
          <Component {...pageProps} />
        </NewAppBar>
      </ThemeProvider>
    </div>
  )
}


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });

