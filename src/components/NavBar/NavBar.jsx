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
        <nav className='p-6 text-black bg-yellow-200'>
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                   open == true ? <AiOutlineClose/>
                   : <RiMenu2Fill/>
                }
                
            </div>
            
            {/* Open and Close with menu icon*/}
           {/* <ul className={`absolute px-6 bg-yellow-200 shadow-lg duration-1000 md:flex 
                ${open ? 'block' : 'hidden'}`}>
                {
                    routes.map(route => 
                        <Link key={route.id} route={route}></Link>
                    )
                }
           </ul> */}

           {/* positioning fron the top */}
           <ul className={`absolute px-6 bg-yellow-200 
                 duration-1000 md:flex md:static 
                ${open ? 'top-20' : '-top-60'}`}>
                {
                    routes.map(route => 
                        <Link key={route.id} route={route}></Link>
                    )
                }
           </ul>
           {/* <ul className={`absolute px-6 bg-yellow-200 shadow-lg duration-1000 md:flex ${open ? 'block' : 'hidden'}`}>
                {
                    routes.map(route => 
                        <Link key={route.id} route={route}></Link>
                    )
                }
           </ul> */}
           {/* <ul className={`absolute px-6 bg-yellow-200 shadow-lg duration-1000 md:flex ${open ? 'block' : 'hidden'}`}>
                {
                    routes.map(route => 
                        <Link key={route.id} route={route}></Link>
                    )
                }
           </ul> */}
           
        </nav>
    );
};

export default NavBar;