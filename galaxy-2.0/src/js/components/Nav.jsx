import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="nav justify-content-center">
                <li className="nav-item"><Link to='/' className='nav-link'>Home</Link></li>
                <li className="nav-item"><Link to='/account' className='nav-link'>Account</Link></li>
                <li className="nav-item"><Link to='/search' className='nav-link'>Search</Link></li>
        </div>
        </>
        )
}

export default Nav