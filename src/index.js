import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import store from "redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import theme from "./MuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
