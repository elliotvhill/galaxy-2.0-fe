import React, { useState, useEffect, useContext } from "react"
import UserContext from "../../UserContext"

function Search() {
    const [searchInput, setSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit handled")
        console.log('Searched:', searchInput)
        setSearchInput('')
    }
    
        // useEffect(() => {
        //     console.log(searchInput)
        // }, [searchInput])

    return (
        <>
            <div className='container'>
                <div className='container-fluid'>
                    <h3 className='fw-light'> Search </h3>
                    <p className='fw-medium'>
                        Search for a deep space object to observe.
                    </p>
                    <form
                        className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'
                        role='search'
                        data-form-type=''
                        onSubmit={handleSubmit}
                    >
                        <div className='container d-flex'>
                            <input
                                type='search'
                                className='form-control'
                                placeholder='Search the cosmos...'
                                aria-label='Search'
                                data-form-type=''
                                name='search bar'
                                value={searchInput}
                                onChange={handleChange}
                            ></input>
                            <button
                                className='btn btn-outline-primary ms-1'
                                type='submit'
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search
