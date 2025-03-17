import Link from "../Link/Link";
const NavBar = () => {

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
           <ul className='flex md:'>
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