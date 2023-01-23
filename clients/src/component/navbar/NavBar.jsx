import { ArrowDropDown, Face2, NotificationsActive, Search } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../authContext/AuthActions';
import { AuthContext } from '../../authContext/AuthContext';
import './navbar.scss';


function NavBar() {
    const [ isScroling,setIsScroling] = useState(false);
    const {dispatch} = useContext(AuthContext)

    window.onscroll = () => {
        setIsScroling(window.pageYOffset === 0 ? false : true)
        return() => (window.onscroll = null)
    }
  return ( 

    <div className={isScroling ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                <Link to='/'  className='link'>
                <span>Home</span>
                </Link>
                <Link to='/series'  className='link'>
                <span>TV Shows</span>
                </Link>
                <Link to='/movie' className='link'>
                <span>Movies</span>
                </Link>
                <span>New & Popular</span>
                <span>My List</span>
                <span>Browse by Language</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                Kids
                <NotificationsActive className='icon'/>
                <Face2/>
                <div className="profile">
                <ArrowDropDown className='icon'/>
                    <div className="options">
                    <span> Setting</span>
                   <span onClick={() => dispatch(logout())}>  Logout</span>
                  
                    </div>
                </div>
                



            </div>
        </div>
    </div>
  )
}

export default NavBar