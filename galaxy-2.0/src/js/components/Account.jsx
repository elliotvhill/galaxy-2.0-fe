import React from 'react'

function Account() {
    const logIn = () => {
        console.log('Login clicked')
    }
    const signUp = () => {
        console.log('Sign me up!')
    }
    return (
        <>
            <div className='container'>
                <div className='container-fluid'>
                    <h3 className='fw-light'> Account </h3>
                    <p className='fw-medium'>
                        This is where the login and signup functions will live.
                        While logged in, users will be able to update account
                        details.
                    </p>
                    <button
                        className='btn btn-outline-primary mx-1'
                        onClick={signUp}
                    >
                        Sign up
                    </button>
                    <button
                        className='btn btn-outline-success mx-1'
                        onClick={logIn}
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Account
