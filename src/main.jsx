import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import store from './redux/store.js'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <React.StrictMode>
         <Router>
            <PersistGate loading={null} persistor={persistor}>
               <App />
            </PersistGate>
         </Router>
      </React.StrictMode>
   </Provider>
)
