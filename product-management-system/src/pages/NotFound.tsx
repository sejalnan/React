import { Link } from 'react-router-dom'
import '../assets/css/404.css'
const NotFound = () => {

    return (
        <div className='not-found'>
            <main>
                <h1>Sorry!</h1>
                <p>
                    Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>
                </p>
                <Link to={'/'}>
                    <button >You can go now!</button>
                </Link>
            </main>
        </div>
    )
}

export default NotFound