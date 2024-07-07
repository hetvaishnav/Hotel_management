import { useState } from 'react'
import React from 'react';
import { ReactDOM } from 'react';
import Approutes from "./routes/ARoutes"
import Header from "./components/Header/Header"
 

function App() {

  return (
    <>

      <div className="flex h-screen flex-col mt-0">
        <Header />
        <div className="flex-grow overflow-y-auto">
          <Approutes />
        </div>
      </div>
    </>
  )
}

export default App;
