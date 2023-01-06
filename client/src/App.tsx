import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import './App.css'
import store from './store/store'
import ProtectedRoute from './routes/ProtectedRoute'
import {
  Game,
  Login
} from './components'

let persistor = persistStore(store) 

type Props = {
  children: React.ReactNode
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Game/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      </PersistGate>
    </Provider>
  )
}

export default App
