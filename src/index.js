import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App'
import reportWebVitals from './reportWebVitals';
import { ChakraProvider , extendTheme } from '@chakra-ui/react';

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
  color: "gray.500"
} 

export const theme = extendTheme({
  components: {
      Form: {
          variants: {
              floating: {
                  container: {
                      _focusWithin: {
                          label: {
                              ...activeLabelStyles
                          }
                      },
                      "input:not(:placeholder-shown) + label, select:not(:placeholder-shown) ~ label, option:not(:placeholder-shown) ~ label, .chakra-select_wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                          ...activeLabelStyles
                      },
                      label: {
                          top: 0,
                          left: 0,
                          zIndex: 2,
                          position: "absolute",
                          backgroundColor: "transparent",
                          pointerEvents: "none",
                          mx: 3,
                          px: 1,
                          my: 2,
                          transformOrigin: "left top"
                      }
                  }
              }
          }
      }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
