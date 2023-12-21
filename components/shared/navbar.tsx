/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/portfolio',
        title: 'PortfolioPage'
    }
]

function NavBar() {
    return (
        <nav className="flex items-center justify-between  w-full bg-gray-400 p-3">
            <div>
            <h1 className="text-3xl font-semibold hover:text-cyan-400 duration-500">Portfolio</h1>
            </div>
            <ul className="flex items-center justify-center">
            {
                navLinks.map(({path, title})=> <li className="mx-2 font-semibold hover:text-cyan-400 duration-500" key={path}>
                    <Link href={path}>{title}</Link>
                </li>)
            }
            </ul>
            
        </nav>
    );
};

export default NavBar;