import Link from 'next/link';
import React from 'react';

const BannerSection = () => {
    return (
        <div>
            <section className="relative overflow-hidden bg-[#0B0D0A] text-white content-center h-screen">
                
                <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#C8F04B]/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#C8F04B]/10 blur-3xl"></div>

                <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

                    {/* Badge */}
                    <span className="mb-6 rounded-full border border-[#C8F04B]/30 bg-[#C8F04B]/10 px-4 py-2 text-sm text-[#C8F04B] backdrop-blur">
                        Smart Sports Facility Booking Platform
                    </span>

                    {/* Heading */}
                    <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
                        Book Your Perfect
                        <span className="text-[#C8F04B]"> Sports Facility </span>
                        Anytime, Anywhere
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                        SportNest helps players and organizers easily discover, book,
                        and manage sports facilities with a seamless and modern experience.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Link href={'/all-facilities'}>
                            <button className="cursor-pointer rounded-full bg-[#C8F04B] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,240,75,0.35)]">
                                Explore Facilities
                            </button>
                        </Link>

                        <button className="cursor-pointer rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#C8F04B]/40 hover:bg-[#C8F04B]/10">
                            Learn More
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
                            <h3 className="text-3xl font-bold text-[#C8F04B]">500+</h3>
                            <p className="mt-1 text-sm text-gray-400">Facilities</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
                            <h3 className="text-3xl font-bold text-[#C8F04B]">10K+</h3>
                            <p className="mt-1 text-sm text-gray-400">Bookings</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
                            <h3 className="text-3xl font-bold text-[#C8F04B]">50+</h3>
                            <p className="mt-1 text-sm text-gray-400">Cities</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
                            <h3 className="text-3xl font-bold text-[#C8F04B]">24/7</h3>
                            <p className="mt-1 text-sm text-gray-400">Availability</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BannerSection;