import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import News from './components/News'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <News key='general' pageSize={8} country='in' category='general' API_KEY='4404fbc57aa147dda7f5b2b1cbae6a1e'/>
      },
      {
        path: '/business',
        element: <News key='business' pageSize={8} country='in' category='business' API_KEY='4404fbc57aa147dda7f5b2b1cbae6a1e'/>
      },
      {
        path: '/entertainment',
        element: <News key='entertainment' pageSize={8} country='in' category='entertainment' API_KEY='4404fbc57aa147dda7f5b2b1cbae6a1e'/>
      },
      {
        path: '/general',
        element: <News key='general' pageSize={8} country='in' category='general' API_KEY='4404fbc57aa147dda7f5b2b1cbae6a1e'/>
      },
      {
        path: '/health',
        element: <News key='health' pageSize={8} country='in' category='health' API_KEY='4404fbc57aa147dda7f5b2b1cbae6a1e'/>
      },
      {
        path: '/science',
        element: <News key='science' pageSize={8} country='in' category='science' API_KEY='4404fbc57aa147dda7f5b2b1cbae6a1e'/>
      },
      {
        path: '/sports',
        element: <News key='sports' pageSize={8} country='in' category='sports' API_KEY='4404fbc57aa147dda7f5b2b1cbae6a1e'/>
      },
      {
        path: '/technology',
        element: <News key='technology' pageSize={8} country='in' category='technology' API_KEY='4404fbc57aa147dda7f5b2b1cbae6a1e'/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
