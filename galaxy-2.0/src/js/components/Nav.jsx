import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='container'>
                <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom  bg-body-tertiary'>
                    <Link
                        to='/'
                        className='nav-link d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'
                    >
                        <span className='fs-4'>Galaxy Gaze</span>
                    </Link>

                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/account' className='nav-link'>
                                Account
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/search' className='nav-link'>
                                Search
                            </Link>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    )
}

export default Nav
