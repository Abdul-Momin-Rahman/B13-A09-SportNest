'use client'

import React from 'react';
import { Logo } from './Logo';
import MyNavLink from './MyNavLink';
import { Button, Dropdown, Label } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const Navbar = () => {

    const router = useRouter();


    return (
        <div className='bg-[#0B0D0A] p-3'>
            <div className=' flex justify-between items-center  max-w-6xl mx-auto'>
                <Logo />

                <div className='lg:flex justify-between items-center hidden gap-2'>
                    <MyNavLink href={'/'}>Home</MyNavLink>
                    <MyNavLink href={'/all-facilities'}>All Facilities</MyNavLink>

                    {/* {Hidden when logged out} */}
                    <div className='lg:flex justify-between items-center hidden gap-2'>
                        <MyNavLink href={'/my-bookings'}>My Bookings</MyNavLink>
                        <MyNavLink href={'/add-facility'}>Add Facility</MyNavLink>
                        <MyNavLink href={'/my-facilities'}>My Facilities</MyNavLink>
                    </div>
                </div>


                {/* {for desktop view} */}
                <div className='hidden lg:flex justify-between items-center '>
                    <Dropdown className='p-5 '>
                        <Button aria-label="Menu" variant="ghost" className={"bg-[#0B0D0A] "}>
                            <Image src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                width={40}
                                height={40}
                                alt='image'
                                className='rounded-full'
                            />

                            <span className='text-white'>Meow</span>
                        </Button>
                        <Dropdown.Popover className={"bg-[#0B0D0A]"}>
                            <Dropdown.Menu onAction={(key) => {
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
                            }}>
                                <Dropdown.Item id="my-bookings" textValue="My Bookings" className='text-white hover:text-black hover:bg-white'>
                                    My Bookings
                                </Dropdown.Item>
                                <Dropdown.Item id="add-facility" textValue="Add Facility" className="text-white hover:text-black hover:bg-white ">
                                    Add Facility
                                </Dropdown.Item>
                                <Dropdown.Item id="my-facilities" textValue="My Facilities" className='text-white hover:text-black hover:bg-white'>
                                    My Facilities
                                </Dropdown.Item>
                                <Dropdown.Item id="logout" textValue="Logout" variant="danger" className=' hover:text-black hover:bg-red-200'>
                                    <Label>Logout</Label>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>

                {/* {for mobile view} */}
                <div className='flex justify-between items-center lg:hidden'>
                    <Dropdown className='p-5 '>
                        <Button aria-label="Menu" variant="ghost" className={"bg-[#0B0D0A] "}>
                            <Image src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                width={40}
                                height={40}
                                alt='image'
                                className='rounded-full'
                            />

                            <span className='text-white'>Meow</span>
                        </Button>
                        <Dropdown.Popover className={"bg-[#0B0D0A]"}>
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
                                <Dropdown.Item id="home" textValue="home" className='text-white hover:text-black hover:bg-white'>
                                    Home
                                </Dropdown.Item>
                                <Dropdown.Item id="all-facilities" textValue="allFacilities" className='text-white hover:text-black hover:bg-white'>
                                    All Facilities
                                </Dropdown.Item>
                                <Dropdown.Item id="my-bookings" textValue="My Bookings" className='text-white hover:text-black hover:bg-white'>
                                    My Bookings
                                </Dropdown.Item>
                                <Dropdown.Item id="add-facility" textValue="Add Facility" className="text-white hover:text-black hover:bg-white ">
                                    Add Facility
                                </Dropdown.Item>
                                <Dropdown.Item id="my-facilities" textValue="My Facilities" className='text-white hover:text-black hover:bg-white'>
                                    My Facilities
                                </Dropdown.Item>
                                <Dropdown.Item id="logout" textValue="Logout" variant="danger" className=' hover:text-black hover:bg-red-200'>
                                    <Label>Logout</Label>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>

                <Button variant='primary' className={"bg-[#C8F04B] text-black font-extrabold rounded-lg"}>Login</Button>
            </div>
        </div>
    );
};

export default Navbar;