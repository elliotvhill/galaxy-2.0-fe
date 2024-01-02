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
                <Nav />
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/account' element={<Account />} />
            </Routes>
            {/* <div className="container py-4 px-3 mx-auto">
                <button className='btn btn-primary'>Primary button</button>
                <button className='btn btn-secondary'>Secondary button</button>
                <button className='btn btn-warning'>Warning button</button>
                <button className='btn btn-danger'>Danger button</button>
            </div> */}
        </>
    )
}

export default App
