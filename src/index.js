import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/app/store";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "IBM Plex Mono"
    },
    palette: {
        primary: {
            main: "#56359f"
        },
        secondary: {
            main: "#d98f39"
        },
        background: {
            default: "#12072f",
            paper: "#29165a"
        },
        text: {
            primary: "#f0eef2",
            secondary: "#9a8fb2"
        }
    },
    shape: {
        borderRadius: 0
    }
})

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <ThemeProvider theme={theme}>
                  <App />
              </ThemeProvider>
          </BrowserRouter>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

