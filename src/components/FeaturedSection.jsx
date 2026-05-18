import React from 'react';
import FacilityCard from './FacilityCard';
import Link from 'next/link';

const FeaturedSection = async () => {

    const res = await fetch(`${'http://localhost:5000'}/all-facilities`);
    const facilities = await res.json();

    // console.log(facilities)
    return (
        <div>
            <section className="relative overflow-hidden bg-[#0B0D0A] py-24 text-white">



                <div className="relative mx-auto max-w-7xl px-6">


                    <div className="text-center max-w-2xl mx-auto">
                        <span className="rounded-full border border-[#C8F04B]/30 bg-[#C8F04B]/10 px-4 py-2 text-sm text-[#C8F04B]">
                            Featured Facilities
                        </span>

                        <h1 className="mt-6 text-4xl font-black md:text-5xl">
                            <span className="text-[#C8F04B]">Top Sports</span> Venues
                        </h1>

                        <p className="mt-5 text-gray-400">
                            Discover and book the most popular sports facilities in your area.
                        </p>
                    </div>


                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {
                            facilities.slice(0, 6).map(facility => <FacilityCard facility={facility} key={facility._id}></FacilityCard>)
                        }

                    </div>

                    <Link href={'/all-facilities'} className='flex justify-center items-center'>
                        <button className="mt-12 cursor-pointer rounded-full bg-[#C8F04B] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,240,75,0.35)]">
                            All Facilities
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default FeaturedSection;