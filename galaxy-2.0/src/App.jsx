import React, { useState } from "react"
import "./scss/custom.scss"
import { Route, Routes } from "react-router-dom"
import Home from "./js/components/Home"
import Nav from "./js/components/Nav"
import Account from "./js/components/Account"
import Search from "./js/components/Search"

function App() {
    return (
        <>
        <header>
          <h3 className="container">Galaxy Gaze</h3>
                <Nav />
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/account' element={<Account />} />
            </Routes>
        </>
    )
}

export default App
