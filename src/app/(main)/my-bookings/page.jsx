

import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import {
    CalendarDays,
    Clock3,
    Wallet,
    Ticket,
} from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";



export default async function BookingPage() {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })


    const user = session?.user
    const userId = user?.id
    // console.log(userId)

    const res = await fetch(`http://localhost:5000/my-bookings/${userId}`)
    const bookings = await res.json();
    // console.log(bookings)

    const total_price = bookings.reduce((sum, booking) => sum + booking.totalPrice, 0)



    return (
        <div className=" bg-[#0B0D0A] px-5 md:px-10 py-10">
            <div className="min-h-screen max-w-6xl mx-auto  text-[#E8EDE3] ">

                <div className="mb-10">
                    <p className="text-[#C8F04B] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                        Dashboard
                    </p>

                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                        My Bookings
                    </h1>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    <div className="bg-[#121410] border border-[#1E2219] rounded-3xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-[#9BA694] uppercase text-sm tracking-wider">
                                Total Bookings
                            </p>

                            <Ticket className="text-[#4DC8FF]" size={22} />
                        </div>

                        <h2 className="text-5xl font-black text-[#4DC8FF]">
                            {bookings.length}
                        </h2>
                    </div>

                    <div className="bg-[#121410] border border-[#1E2219] rounded-3xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-[#9BA694] uppercase text-sm tracking-wider">
                                Total Spent
                            </p>

                            <Wallet className="text-[#FF9F4D]" size={22} />
                        </div>

                        <h2 className="text-5xl font-black text-[#FF9F4D]">
                            {total_price}
                        </h2>
                    </div>
                </div>


                {bookings.length > 0 ? <div className="space-y-5">
                    {bookings.map((booking) => {
                        const status = { label: 'Pending' };

                        return (
                            <div
                                key={booking._id}
                                className="group bg-[#121410] border border-[#1E2219] hover:border-[#2A2E28] transition-all duration-300 rounded-[28px] p-5 md:p-7"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                                    <div className="flex items-start gap-5">

                                        <div>
                                            <h2 className="text-2xl font-black uppercase mb-3">
                                                {booking.facilityName}
                                            </h2>

                                            <div className="flex flex-wrap items-center gap-4 text-sm text-[#9BA694]">
                                                <div className="flex items-center gap-2">
                                                    <CalendarDays size={15} />
                                                    <span>{booking.date}</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <Clock3 size={15} />
                                                    <span>{booking.slot}</span>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                                        <div className="text-left md:text-right">
                                            <h3 className="text-4xl font-black text-[#C8F04B]">
                                                ৳{booking.totalPrice}
                                            </h3>

                                            <div
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-3 border"
                                            >

                                                <span className="uppercase text-xs font-bold tracking-wide">
                                                    {status.label}
                                                </span>
                                            </div>
                                        </div>

                                        <BookingCancelAlert bookingId={booking._id}></BookingCancelAlert>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                    :
                    <div className="flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-white/10 bg-white/5">

                        <div className="text-5xl mb-4">📭</div>

                        <h2 className="text-3xl font-bold text-white">
                            No Bookings Yet
                        </h2>

                        <Link href={'/all-facilities'}>
                            <button className="cursor-pointer mt-6 rounded-2xl bg-[#C8F04B] px-6 py-2 font-semibold text-black hover:scale-[1.03] transition">
                                Explore Facilities
                            </button>
                        </Link>

                    </div>
                }
            </div>
        </div>
    );
}