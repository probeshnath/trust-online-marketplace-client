import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="footer py-10 px-2  max-w-7xl mx-auto grid grid-cols-2 place-items-center lg:grid-cols-4 text-gray-300">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Web Design</a>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">Grapic Design </a>
                    <a className="link link-hover">Digital Marketing</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a href='/' className="link link-hover">Home</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">My Profile</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-2 py-8 bg-black border-t text-base-content  md:flex text-center md:justify-between items-center border-base-300">
                <aside className="items-center mx-auto flex-col flex text-center grid-flow-col">
                <Link to="/" className='flex justify-center gap-2 items-center' > <img className='w-[50px] h-[50px]' src="https://i.ibb.co/KKYjfWt/pngtree-green-hand-logo-designs-png-image-4157971-removebg-preview1.png" alt="" /> <h2 className='text-3xl text-green-600 font-bold'> Nimpata</h2> </Link>
                    <p ><span className='text-lg text-green-600 font-bold'>Nimpata Online Market-place Ltd.</span> <br /><span className='text-gray-500 text-center'>Providing reliable service since 2015</span></p>
                </aside>
                <p className='font-semibold text-gray-400 mx-auto text-lg'> &copy; All right reserved Nimpate Online Market-place </p>
                <nav className="md:place-self-center mx-auto md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                      <Link target='_blank' to="https://www.facebook.com/probeshdebnath20/"> <FaFacebookF className='text-xl text-[#4267B2] ' /></Link> 
                      <Link target='_blank' to='https://github.com/probeshnath' > <FaGithub className='text-xl text-gray-300'  /></Link> 
                      <Link target='_blank' to='https://www.google.com/search?q=probesh+deb+nath&rlz=1C1VDKB_enBD1076BD1076&oq=probesh+deb+nath&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhBMgYIAhBFGDwyBggDEEUYQTIGCAQQRRg80gEJMjA1OThqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8'> <FaGoogle  className='text-xl text-[#EA4335] ' /></Link> 
                       <Link target='_blank' to='https://www.linkedin.com/in/probeshnath/'> <FaLinkedinIn className='text-xl text-[#0e76a8] '  /></Link>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer