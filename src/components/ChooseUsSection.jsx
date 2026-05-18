import React from 'react';

const ChooseUsSection = () => {
    return (
        <div>
            <section className="relative overflow-hidden bg-[#0B0D0A] py-24 text-white">

                
                <div className="relative mx-auto max-w-7xl px-6">

                    {/* Section Header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="rounded-full border border-[#C8F04B]/30 bg-[#C8F04B]/10 px-4 py-2 text-sm text-[#C8F04B]">
                            Why Choose SportNest
                        </span>

                        <h2 className="mt-6 text-4xl font-black md:text-5xl">
                            Built for Modern Sports Communities
                        </h2>

                        <p className="mt-5 text-gray-400">
                            Experience a smarter and faster way to discover and reserve
                            sports facilities near you.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#C8F04B]/30 hover:bg-[#C8F04B]/5">
                            <div className="mb-5 w-fit rounded-2xl bg-[#C8F04B]/15 p-4 text-3xl text-[#C8F04B]">
                                ⚡
                            </div>

                            <h3 className="text-2xl font-bold">
                                Instant Booking
                            </h3>

                            <p className="mt-4 leading-relaxed text-gray-400">
                                Reserve your preferred sports venue within seconds
                                using our seamless booking system.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#C8F04B]/30 hover:bg-[#C8F04B]/5">
                            <div className="mb-5 w-fit rounded-2xl bg-[#C8F04B]/15 p-4 text-3xl text-[#C8F04B]">
                                🏟️
                            </div>

                            <h3 className="text-2xl font-bold">
                                Premium Facilities
                            </h3>

                            <p className="mt-4 leading-relaxed text-gray-400">
                                Explore verified and high-quality sports venues
                                for football, cricket, badminton, and more.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#C8F04B]/30 hover:bg-[#C8F04B]/5">
                            <div className="mb-5 w-fit rounded-2xl bg-[#C8F04B]/15 p-4 text-3xl text-[#C8F04B]">
                                📅
                            </div>

                            <h3 className="text-2xl font-bold">
                                Smart Scheduling
                            </h3>

                            <p className="mt-4 leading-relaxed text-gray-400">
                                Manage bookings, availability, and schedules
                                efficiently from any device.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChooseUsSection;