import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyNavLink = ({ href, children, className }) => {
    const path = usePathname();
    const isActive = path == href;

    return (
        <div>
            <Link href={href} className={`
                relative px-4 py-2 rounded-xl font-medium transition-all duration-300
                ${isActive
                    ? 'bg-[#C8F04B] text-black shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}>
                {children}
            </Link>
        </div>
    );
};

export default MyNavLink;