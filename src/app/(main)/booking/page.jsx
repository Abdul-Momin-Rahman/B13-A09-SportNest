"use client";

import {Button, Modal} from "@heroui/react";

const BookingPage = () => {
    return (
        <div>

            

            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

                <h2 className="text-2xl font-bold text-white mb-6">
                    Book Facility
                </h2>

                <form className="space-y-5">

                    {/* Facility Name */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Facility Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter facility name"
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#C8F04B]"
                        />
                    </div>

                    {/* Booking Date */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Booking Date
                        </label>

                        <input
                            type="date"
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#C8F04B]"
                        />
                    </div>

                    {/* Time Slot */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Time Slot
                        </label>

                        <select
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#C8F04B]"
                        >
                            <option>06:00 - 08:00</option>
                            <option>08:00 - 10:00</option>
                            <option>16:00 - 18:00</option>
                        </select>
                    </div>

                    {/* Hours */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Hours
                        </label>

                        <input
                            type="number"
                            min="1"
                            placeholder="Enter booking hours"
                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#C8F04B]"
                        />
                    </div>

                    {/* Total Price */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Total Price
                        </label>

                        <input
                            type="text"
                            value="৳ 2400"
                            readOnly
                            className="w-full rounded-2xl border border-[#C8F04B]/30 bg-[#C8F04B]/10 px-4 py-3 font-semibold text-[#C8F04B] outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-[#C8F04B] py-3 font-semibold text-black transition hover:scale-[1.02] cursor-pointer"
                    >
                        Confirm Booking
                    </button>

                </form>
            </div>
        </div>
    );
};

export default BookingPage;