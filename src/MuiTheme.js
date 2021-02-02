import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#1a1a1a",
    },
    secondary: {
      main: "#1a1a1a",
    },
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
  },
  overrides: {
    MuiTextField: {
      root: {
        width: "100%",
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
    MuiFormControlLabel: {
      root: {
        "margin-right": 0,
      },
    },
    MuiPagination: {
      root: {
        "margin-top": "25px",
      },
    },
  },
});
