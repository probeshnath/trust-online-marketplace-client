import { NavLink, Link } from 'react-router-dom'


const Layout = ({ children }) => {

    const links = <>

        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-green-400 text-center font-bold py-1 px-2 rounded-md text-md " : "font-medium"} > Home </NavLink></li>
        <li><NavLink to="/add-job" className={({ isActive }) => isActive ? "text-green-400 font-bold py-1 px-2 rounded-md text-md " : "font-medium"} > Add job </NavLink></li>
        <li><NavLink to="/my-posted-jobs" className={({ isActive }) => isActive ? "text-green-400 font-bold py-1 px-2 rounded-md text-md " : "font-medium"} > My posted jobs </NavLink></li>
        <li><NavLink to="/my-bits" className={({ isActive }) => isActive ? "text-green-400 font-bold py-1 px-2 rounded-md text-md " : "font-medium"} > My Bids </NavLink></li>
        <li><NavLink to="/bid-requests" className={({ isActive }) => isActive ? "text-green-400 font-bold py-1 px-2 rounded-md text-md " : "font-medium"} > Bid Requests </NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? "text-green-400 font-bold py-1 px-2 rounded-md text-md " : "font-medium"} > Login </NavLink></li>

    </>

     const companyName = <Link to="/" className='flex justify-center gap-2 items-center' > <img className='w-[50px] h-[50px]' src="https://i.ibb.co/KKYjfWt/pngtree-green-hand-logo-designs-png-image-4157971-removebg-preview1.png" alt="" /> <h2 className='text-3xl text-green-600 font-bold'> Nimpata</h2> </Link>

    return (
        <div className=''>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className='bg-base-300'>
                        <div className="w-full max-w-7xl mx-auto navbar  ">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2">{companyName}</div>
                            <div className="flex-none hidden lg:block pr-2">
                                <ul className="flex gap-4">
                                    {/* Navbar menu content here */}
                                    {links}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 text-center w-80 min-h-full bg-base-200">
                        <div className='pt-2 pb-4'>
                            {companyName}
                        </div>
                        {/* Sidebar content here */}
                        {links}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Layout