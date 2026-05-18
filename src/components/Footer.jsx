import React from 'react';
import { Logo } from './Logo';

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className=" bg-[#0B0D0A] text-base-content p-10 ">
            <div className='footer sm:footer-horizontal'>
                <aside>
                    <Logo></Logo>
                    <div className='flex flex-col gap-5 justify-center'>
                        <p className='text-gray-300 max-w-sm'>
                            Your go-to platform for booking premium sports facilities across Bangladesh. Play more, stress less.
                        </p>
                        <div>
                            <div className="flex items-center gap-4">
                                {/* Facebook */}
                                <a
                                    href="#"
                                    className="group p-3 rounded-full border border-[#C8F04B]/30 bg-white/5 hover:bg-[#C8F04B] transition-all duration-300"
                                >
                                    <FaFacebookF className="text-[#C8F04B] group-hover:text-black text-lg transition-colors duration-300" />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="#"
                                    className="group p-3 rounded-full border border-[#C8F04B]/30 bg-white/5 hover:bg-[#C8F04B] transition-all duration-300"
                                >
                                    <FaInstagram className="text-[#C8F04B] group-hover:text-black text-lg transition-colors duration-300" />
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="#"
                                    className="group p-3 rounded-full border border-[#C8F04B]/30 bg-white/5 hover:bg-[#C8F04B] transition-all duration-300"
                                >
                                    <FaWhatsapp className="text-[#C8F04B] group-hover:text-black text-lg transition-colors duration-300" />
                                </a>

                                {/* X / Twitter */}
                                <a
                                    href="#"
                                    className="group p-3 rounded-full border border-[#C8F04B]/30 bg-white/5 hover:bg-[#C8F04B] transition-all duration-300"
                                >
                                    <FaXTwitter className="text-[#C8F04B] group-hover:text-black text-lg transition-colors duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
                <nav className='text-gray-300  '>
                    <h6 className="footer-title">Platform</h6>
                    <a className="link link-hover text-gray-300">All Facilities</a>
                    <a className="link link-hover text-gray-300">How It Works</a>
                    <a className="link link-hover text-gray-300">Pricing</a>
                    <a className="link link-hover text-gray-300">Partners</a>
                </nav>
                <nav className='text-gray-300'>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover text-gray-300">Help Center</a>
                    <a className="link link-hover text-gray-300">Contact Us</a>
                    <a className="link link-hover text-gray-300">Privacy Policy</a>
                    <a className="link link-hover text-gray-300">Terms of Use</a>
                </nav>
                <nav className='text-gray-300'>
                    <h6 className="footer-title text-gray-300">Contact</h6>
                    <a className="link link-hover text-gray-300">📍 Dhaka, Bangladesh</a>
                    <a className="link link-hover text-gray-300">📞 +880 1700-000000</a>
                    <a className="link link-hover text-gray-300">✉️ hello@sportnest.com</a>
                    <a className="link link-hover text-gray-300">⏰ 24/7 Support</a>
                </nav>
            </div>

            <hr className="border-[#C8F04B]/20 my-8" />

            <div className='flex flex-col sm:flex-row justify-between items-center gap-3'>
                <p className='text-gray-300'>© 2025 SportNest. All rights reserved.</p>
                <p className='text-gray-300 text-center sm:text-left'>Built with ❤️ for sports lovers in Bangladesh</p>
            </div>
        </footer>
    );
};

export default Footer;