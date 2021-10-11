import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actions/userActions";

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(s => s.user.user)
    return (
        <header className='bg-blue-500 p-5 mb-10'>
       <div className='container mx-auto flex justify-between'>
           <Link className='text-white font-bold text-xl ' to='/'  >Your Logo</Link>
           <ul className='flex'>
               <li><NavLink  className='text-white ' to='/'>Home</NavLink></li>
               <li><NavLink  className='text-white m-3 ' to='/news'>News</NavLink></li>
               {
                   !user &&
                   <li><NavLink  className='text-white  ' to='/login'>Login</NavLink></li>
               }
               {
                   user &&
                    <li >
                        <button  className='text-white '
                        onClick={() =>  dispatch(logout())}
                        >
                            Logout
                        </button>
                    </li>
               }
           </ul>
       </div>
        </header>
    );
};

export default Header;