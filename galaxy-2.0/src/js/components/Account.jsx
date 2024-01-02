import React from "react"

function Account() {
    return (
        <>
            <div className='container'>
                <div className='container-fluid'>
                    <h3 className='fw-light'> This is Account </h3>
                    <p className='fw-medium'>
                        This is where the login and signup functions will live.
                        While logged in, users will be able to update account
                        details.
                    </p>
                    <button className='btn btn-outline-primary'>Sign up</button>
                    <button className='btn btn-outline-success'>Login</button>
                </div>
            </div>
        </>
    )
}

export default Account
