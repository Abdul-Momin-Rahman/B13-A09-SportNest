import Image from 'next/image';
import React from 'react';

const FacilityCard = ({ facility }) => {
    return (
        <div
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#C8F04B]/30 hover:bg-[#C8F04B]/5"
        >

            <div className="w-full h-40 mb-4 overflow-hidden rounded-2xl border border-white/10">
                <Image
                    width={200}
                    height={200}
                    src={facility.image_url}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            <div className="flex items-center justify-between">
                <span className="text-xs rounded-full border border-[#C8F04B]/30 bg-[#C8F04B]/10 px-3 py-1 text-[#C8F04B]">
                    {facility.facility_type}
                </span>

                <span className="text-sm text-gray-400">
                    ৳ {facility.price_per_hour}/hr
                </span>
            </div>

            <h3 className="mt-5 text-xl font-bold group-hover:text-[#C8F04B] transition">
                {facility.name}
            </h3>

            <p className="mt-2 text-gray-400 text-sm">
                📍 {facility.location}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-300">

                <div className="rounded-xl bg-black/20 p-3 border border-white/10">
                    <p className="text-gray-400">Capacity</p>
                    <p className="font-semibold text-white">{facility.capacity} people</p>
                </div>

                <div className="rounded-xl bg-black/20 p-3 border border-white/10">
                    <p className="text-gray-400">Bookings</p>
                    <p className="font-semibold text-white">{facility.booking_count}</p>
                </div>

            </div>

            <div className="mt-4">
                <p className="text-xs text-gray-400 mb-2">Available Slots</p>

                <div className="flex flex-wrap gap-2">
                    {facility.available_slots.map((slot, idx) => (
                        <span
                            key={idx}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                        >
                            {slot}
                        </span>
                    ))}
                </div>
            </div>


            <button className="mt-6 w-full rounded-full text-[#C8F04B] border border-[#C8F04B] py-2 text-sm font-semibold hover:text-black hover:bg-[#C8F04B] hover:scale-[1.02] transition cursor-pointer">
                Book Now
            </button>
        </div>
    );
};

export default FacilityCard;   