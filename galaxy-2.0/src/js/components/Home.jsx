import React from "react"

function Home() {
    return (
        <>
            <div className='container'>
                <div className='container-fluid'>
                    <h3 className='fw-light'> This is Home </h3>
                    <p className='fw-bold'> Welcome to Galaxy Gaze! </p>
                    <p>
                        Galaxy Gaze is an astronomy tracking app that allows you
                        to search for and track your favorite celestial objects.
                    </p>
                    <button className='btn btn-primary'>Let's go!</button>
                </div>
            </div>
        </>
    )
}

export default Home
