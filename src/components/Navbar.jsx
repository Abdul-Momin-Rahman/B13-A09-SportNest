'use client'

import React from 'react';
import { Logo } from './Logo';
import MyNavLink from './MyNavLink';
import { Avatar, Button, Dropdown, Label } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';



const Navbar = () => {

    const router = useRouter();

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user

    // console.log(user)

    const handleSignOut = async () => {
        await authClient.signOut();
    }



    return (
        <div className='bg-[#0B0D0A] p-3 sticky top-0 left-0 w-full z-50 border-b border-[#C8F04B]/20'>
            <div className=' flex justify-between items-center  max-w-6xl mx-auto'>
                <Logo />

                <div className='lg:flex justify-between items-center hidden gap-2'>
                    <MyNavLink href={'/'}>Home</MyNavLink>
                    <MyNavLink href={'/all-facilities'}>All Facilities</MyNavLink>

                    {
                        user &&
                        <>
                            <MyNavLink href={'/my-bookings'}>My Bookings</MyNavLink>
                            <MyNavLink href={'/add-facility'}>Add Facility</MyNavLink>
                            <MyNavLink href={'/my-facilities'}>My Facilities</MyNavLink>
                        </>
                    }

                </div>


                {
                    user ?
                        <>
                            {/* {for desktop view} */}
                            <div className='hidden lg:flex items-center'>

                                <Dropdown className='p-5'>
                                    <Button
                                        aria-label="Menu"
                                        variant="ghost"
                                        className="
                                                    group
                                                    h-[58px]
                                                    px-2 pr-4
                                                    bg-white/5
                                                    hover:bg-white/10
                                                    border border-white/10
                                                    hover:border-[#C8F04B]/30
                                                    backdrop-blur-xl
                                                    rounded-full
                                                    transition-all duration-300
                                                    flex items-center gap-3
                                                "
                                    >


                                        <Avatar className="h-11 w-11 shrink-0 border-2 border-white/10">
                                            <Avatar.Image
                                                alt={user.name}
                                                src={user.image}
                                                className="object-cover"
                                                referrerPolicy='no-referrer'
                                            />

                                            <Avatar.Fallback className="bg-[#C8F04B] text-black font-bold">
                                                {user.name
                                                    ?.split(" ")
                                                    .map((n) => n[0])
                                                    .join("")
                                                    .toUpperCase()}
                                            </Avatar.Fallback>
                                        </Avatar>


                                        <div className="flex flex-col items-start leading-tight">
                                            <span className="text-white font-semibold text-sm">
                                                {user.name
                                                    ?.split(" ")[1].toUpperCase()
                                                }
                                            </span>


                                        </div>


                                        <svg
                                            className="w-4 h-4 text-gray-400 ml-1 group-hover:text-[#C8F04B] transition"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </Button>

                                    {/* Dropdown */}
                                    <Dropdown.Popover
                                        className="
                                                        bg-[#11130F]/95
                                                        backdrop-blur-2xl
                                                        border border-white/10
                                                        rounded-2xl
                                                        shadow-2xl
                                                        shadow-black/40
                                                        p-2
                                                        min-w-[240px]
                                                    "
                                    >


                                        <div className='px-4 py-3 border-b border-white/10 mb-2'>
                                            <p className='text-white font-semibold'>
                                                {user.name}
                                            </p>

                                            <p className='text-xs text-gray-400 truncate'>
                                                {user.email}
                                            </p>
                                        </div>

                                        <Dropdown.Menu
                                            onAction={(key) => {
                                                switch (key) {
                                                    case 'my-bookings':
                                                        router.push('/my-bookings')
                                                        break
                                                    case 'add-facility':
                                                        router.push('/add-facility')
                                                        break
                                                    case 'my-facilities':
                                                        router.push('/my-facilities')
                                                        break
                                                }
                                            }}
                                        >

                                            <Dropdown.Item
                                                id="my-bookings"
                                                className="
                                                            text-gray-200
                                                            hover:text-black
                                                            hover:bg-[#C8F04B]
                                                            rounded-xl
                                                            transition
                                                        "
                                            >
                                                My Bookings
                                            </Dropdown.Item>

                                            <Dropdown.Item
                                                id="add-facility"

                                                className="
                        text-gray-200 hover:text-black hover:bg-[#C8F04B] rounded-xl transition"
                                            >
                                                Add Facility
                                            </Dropdown.Item>

                                            <Dropdown.Item
                                                id="my-facilities"

                                                className="
                                                        text-gray-200
                                                        hover:text-black
                                                        hover:bg-[#C8F04B]
                                                        rounded-xl
                                                        transition
                                                    "
                                            >
                                                My Facilities
                                            </Dropdown.Item>


                                            <Dropdown.Item
                                                id="logout"
                                                onClick={handleSignOut}
                                                variant="danger"
                                                className="
                                                            text-red-300
                                                            hover:bg-red-500/20
                                                            hover:text-red-200
                                                            rounded-xl
                                                            transition
                                                        "
                                            >
                                                <Label>Logout</Label>
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>
                            </div>

                            {/* {for mobile view} */}
                            <div className='flex justify-between items-center lg:hidden'>
                                <Dropdown className='p-5 '>
                                    <Button
                                        aria-label="Menu"
                                        variant="ghost"
                                        className="
                                                    group
                                                    h-[58px]
                                                    px-2 pr-4
                                                    bg-white/5
                                                    hover:bg-white/10
                                                    border border-white/10
                                                    hover:border-[#C8F04B]/30
                                                    backdrop-blur-xl
                                                    rounded-full
                                                    transition-all duration-300
                                                    flex items-center gap-3
                                                "
                                    >


                                        <Avatar className="h-11 w-11 shrink-0 border-2 border-white/10">
                                            <Avatar.Image
                                                alt={user.name}
                                                src={user.image}
                                                className="object-cover"
                                                referrerPolicy='no-referrer'
                                            />

                                            <Avatar.Fallback className="bg-[#C8F04B] text-black font-bold">
                                                {user.name
                                                    ?.split(" ")
                                                    .map((n) => n[0])
                                                    .join("")
                                                    .toUpperCase()}
                                            </Avatar.Fallback>
                                        </Avatar>


                                        <div className="flex flex-col items-start leading-tight">
                                            <span className="text-white font-semibold text-sm">
                                                {user.name
                                                    ?.split(" ")[1].toUpperCase()
                                                }
                                            </span>


                                        </div>


                                        <svg
                                            className="w-4 h-4 text-gray-400 ml-1 group-hover:text-[#C8F04B] transition"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </Button>

                                    <Dropdown.Popover className={"bg-[#0B0D0A]"}>

                                        <div className='px-4 py-3 border-b border-white/10 mb-2'>
                                            <p className='text-white font-semibold'>
                                                {user.name}
                                            </p>

                                            <p className='text-xs text-gray-400 truncate'>
                                                {user.email}
                                            </p>
                                        </div>

                                        <Dropdown.Menu onAction={(key) => {
                                            switch (key) {
                                                case 'home':
                                                    router.push('/')
                                                    break
                                                case 'all-facilities':
                                                    router.push('/all-facilities')
                                                    break
                                                case 'my-bookings':
                                                    router.push('/my-bookings')
                                                    break
                                                case 'add-facility':
                                                    router.push('/add-facility')
                                                    break
                                                case 'my-facilities':
                                                    router.push('/my-facilities')
                                                    break
                                            }
                                        }
                                        }>
                                            <Dropdown.Item
                                                id="home"
                                                textValue="Home"
                                                className="
                        text-gray-200
                        hover:text-black
                        hover:bg-[#C8F04B]
                        rounded-xl
                        transition
                    "
                                            >
                                                Home
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id="all-facilities"
                                                textValue="All Facilities"
                                                className="
                        text-gray-200
                        hover:text-black
                        hover:bg-[#C8F04B]
                        rounded-xl
                        transition
                    "
                                            >
                                                All Facilities
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id="my-bookings"
                                                textValue="My Bookings"
                                                className="
                        text-gray-200
                        hover:text-black
                        hover:bg-[#C8F04B]
                        rounded-xl
                        transition
                    "
                                            >
                                                My Bookings
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id="add-facility"
                                                textValue="Add Facility"
                                                className="
                        text-gray-200
                        hover:text-black
                        hover:bg-[#C8F04B]
                        rounded-xl
                        transition
                    "
                                            >
                                                Add Facility
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id="my-facilities"
                                                textValue="My Facilities"
                                                className="
                        text-gray-200
                        hover:text-black
                        hover:bg-[#C8F04B]
                        rounded-xl
                        transition
                    "
                                            >
                                                My Facilities
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={handleSignOut}
                                                id="logout"
                                                textValue="Logout"
                                                variant="danger"
                                                className="
                        text-red-300
                        hover:bg-red-500/20
                        hover:text-red-200
                        rounded-xl
                        transition
                    "
                                            >
                                                <Label>Logout</Label>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>
                            </div>
                        </>
                        :
                        <>
                            <Link href={'/login'}>
                                <Button variant='primary' className={"bg-[#C8F04B] text-black font-extrabold rounded-lg"}>Login</Button>
                            </Link>
                        </>
                }


            </div>


        </div>
    );
};

export default Navbar;