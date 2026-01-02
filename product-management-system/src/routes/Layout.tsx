import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <h1>Welcome</h1>

            <ul >
                <li><Link to={'/product'}>Go To Product  </Link>
                    <Link to={'/add-product'}>Add Product </Link>
                    <Link to={'/edit-product'}>Edit Product </Link>
                </li>

            </ul>
            <Outlet />
        </div>
    )
}

export default Layout