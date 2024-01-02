import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="container nav">
                <Link to='/'>Home</Link>
                <Link to='/account'>Account</Link>
                <Link to='/search'>Search</Link>
        </div>
        </>
        )
}

export default Nav