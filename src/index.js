import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import RoutingPage from './pages/RoutingPage';
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import './bootstrap.min.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const analytics = Analytics({
  app: 'GHPAGES',
  plugins: [
    googleAnalytics({
      trackingId: 'G-GB4FJFR79W'
    })
  ]
})


root.render(
  <React.StrictMode>
    <BrowserRouter  basename=''>
    <ThemeProvider>
    <RoutingPage analytics={analytics}/>
    </ThemeProvider>
    
    </BrowserRouter >
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
