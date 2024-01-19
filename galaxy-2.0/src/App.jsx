import React, { useEffect, useState, useContext } from 'react'
import './scss/custom.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './js/components/Home'
import Nav from './js/components/Nav'
import Account from './js/components/Account'
import Search from './js/components/Search'
import Footer from './js/components/Footer'
import UserContext from './UserContext'

function App() {
    // create user info
    const [userInfo, setUserInfo] = useState({
        userId: null,
        username: '',
        password: '',
        email: '',
    })

    // create login status
    // const [loggedIn, setLoggedIn] = useState(false)

    // set login status
    // useEffect(() => {
    //     if (userInfo.userId) {
    //         setLoggedIn(true)
    //         console.log('user is logged in')
    //     } else {
    //         setLoggedIn(false)
    //     }
    // }, [userInfo.userId])

    return (
        <>
            <UserContext.Provider value={{ userInfo, setUserInfo }}>
                <header>
                    <Nav />
                </header>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/account' element={<Account />} />
                </Routes>
                <Footer />
            </UserContext.Provider>
        </>
    )
}

export default App
