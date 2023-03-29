import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import DetailView from './routes/DetailView';
import NotFound from './routes/NotFound';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>

        // In this step, we'll create a 'catch-all' route for any other url patterns that users may accidentally go to. As mentioned in the previous step, this will not catch if the user inputs a symbol in our dynamic path that is not case matched or doesn't exist in our coin list (like /coinDetails/btc instead of /coinDetails/BTC) but it will catch cases of going to an absolute path that doesn't exist, like going to /coinDetail/... instead of /coinDetails/... or other similar cases.
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
