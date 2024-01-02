import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <div className='nav navbar navbar-expand-lg bg-body-tertiary justify-content-center'>
                <li className='navbar-brand'>
                    <Link to='/' className='nav-link'>
                    <h3>Galaxy Gaze</h3>
                    </Link>
                </li>
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
            </div>
        </>
    )
}

export default Nav
