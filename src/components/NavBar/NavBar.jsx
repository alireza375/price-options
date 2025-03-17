import { FaBeer } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import Link from "../Link/Link";
import { useState } from "react";
const NavBar = () => {

    const [open, setOpen] = useState(false)

    // route paths with id, path and name
    const routes = [
       { id: 1, path: '/', name: 'Home' },
       { id: 2, path: '/about', name: 'About' },
       { id: 3, path: '/contact', name: 'Contact' },
       { id: 4, path: '/login', name: 'Login' },
       { id: 5, path: '/register', name: 'Register' },
    ]

    return (
        <nav>
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                   open == true ? <AiOutlineClose/>
                   : <RiMenu2Fill/>
                }
                
            </div>
           <ul className='md:flex'>
                {
                    routes.map(route => 
                        <Link key={route.id} route={route}></Link>
                    )
                }
           </ul>
        </nav>
    );
};

export default NavBar;