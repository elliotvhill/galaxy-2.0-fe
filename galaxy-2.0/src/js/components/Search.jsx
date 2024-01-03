import React from "react"

function Search() {
    return (
        <>
            <div className='container'>
                <div className='container-fluid'>
                    <h3 className='fw-light'> This is Search </h3>
                    <p className='fw-medium'>
                        This is where the search functionality will live.
                    </p>
                    <div className="container container-fluid">
                    <form
                        className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'
                        role='search'
                        data-form-type=''
                        >
                        <input
                            type='search'
                            className='form-control'
                            placeholder='Search the cosmos...'
                            aria-label='Search'
                            data-form-type=''
                            ></input>
                            <button
                                className='btn btn-outline-primary'
                                type='submit'
                            >Search</button>
                    </form>
                            </div>
                </div>
            </div>
        </>
    )
}

export default Search
