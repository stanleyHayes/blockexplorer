import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/app/store";
import {BrowserRouter} from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

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
        },
        light: {
            secondary: "rgba(217,143,57,0.03)"
        },
        mode: "dark"
    },
    shape: {
        borderRadius: 4
    }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline enableColorScheme={true} />
                <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();

