import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const firstTheme= createTheme({
  palette:{
    mode: 'dark',
    secondary:{
        main: '#19897b'
    },
    error:{
        main: red.A400
    },

  },
  components:{
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides:{
        root:{
          backgroundColor: '#4a148c'
        }
      }
    },
  
  }
  

})