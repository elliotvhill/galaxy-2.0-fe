import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='container'>
                <div className='px-4 py-5 my-5 text-center'>
                    <h1 className='display-5 fw-bold text-body-emphasis'>
                        Galaxy Gaze
                    </h1>
                    <img
                        className='d-block mx-auto mt-4 mb-4'
                        src='/src/assets/rocket_silver.svg'
                        alt=''
                        width='96'
                        height='96'
                    />
                    <p className='fw-medium'> Welcome to Galaxy Gaze! </p>
                    <div className='col-lg-6 mx-auto'>
                        <p className='lead mb-4'>
                            Galaxy Gaze is an astronomy tracking app that allows
                            you to search for and track your favorite celestial
                            objects.
                        </p>
                        <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                            <Link to='/search' className='nav-link'>
                                <button
                                    type='button'
                                    className='btn btn-primary btn-lg px-4 gap-3'
                                >
                                    Let's go!
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
