import Image from 'next/image';
import {
    MapPin,
    Users,
    Mail,
    Calendar,
    BadgeDollarSign,
    Clock3,
    Star,
} from "lucide-react";
import BookingModal from '@/components/BookingModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';


const FacilityDetailsPage = async ({ params }) => {
    const { id } = await params;

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    // if (!token) {
    //     console.log("No token found");
    // }
    // console.log(token)

    const res = await fetch(`http://localhost:5000/all-facilities/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const facility = await res.json();

    // console.log(facility)

    return (
        <div className="min-h-screen bg-[#0B0D0A] text-[#E8EDE3]">



            {/* HERO SECTION */}
            <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                    src={facility?.image_url}
                    alt={facility?.name}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-[#0B0D0A]/70 to-black/20" />

                <div className="absolute bottom-0 left-0 w-full">
                    <div className="max-w-7xl mx-auto px-6 pb-10">

                        <div className="flex flex-wrap gap-3 mb-5">
                            <div className="px-4 py-2 rounded-full bg-[#C8F04B] text-black font-semibold text-sm">
                                {facility.facility_type}
                            </div>

                            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10 text-sm">
                                Indoor Court
                            </div>

                            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10 text-sm flex items-center gap-2">
                                <Star size={15} className="fill-[#C8F04B] text-[#C8F04B]" />
                                4.9 Rating
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                                    {facility.name}
                                </h1>

                                <div className="flex items-center gap-2 text-[#C7CEC0]">
                                    <MapPin size={18} />
                                    <p>{facility.location}</p>
                                </div>
                            </div>

                            <div className="bg-[#121410]/90 backdrop-blur border border-[#1E2219] rounded-3xl px-8 py-6 min-w-[280px]">
                                <p className="text-[#9BA694] text-sm mb-2">
                                    Starting From
                                </p>

                                <div className="flex items-end gap-2">
                                    <h2 className="text-5xl font-bold text-[#C8F04B]">
                                        ৳{facility.price_per_hour}
                                    </h2>

                                    <span className="text-[#9BA694] mb-1">
                                        / hour
                                    </span>
                                </div>


                                <BookingModal facility={facility}></BookingModal>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* ABOUT */}
                        <div className="bg-[#121410] border border-[#1E2219] rounded-3xl p-8">
                            <h2 className="text-2xl font-semibold mb-5">
                                About Facility
                            </h2>

                            <p className="text-[#C7CEC0] leading-8">
                                {facility.description}
                            </p>
                        </div>

                        {/* SLOTS */}
                        <div className="bg-[#121410] border border-[#1E2219] rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock3 className="text-[#C8F04B]" />
                                <h2 className="text-2xl font-semibold">
                                    Available Time Slots
                                </h2>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {facility.available_slots.map((slot, index) => (
                                    <div
                                        key={index}
                                        className="group cursor-pointer bg-[#1A1D18] hover:bg-[#C8F04B]/10 border border-[#2A2F25] hover:border-[#C8F04B]/40 transition rounded-2xl p-5"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-[#9BA694] mb-1">
                                                    Slot
                                                </p>

                                                <h3 className="font-medium">
                                                    {slot}
                                                </h3>
                                            </div>

                                            <div className="w-3 h-3 rounded-full bg-[#C8F04B]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FEATURES */}
                        <div className="bg-[#121410] border border-[#1E2219] rounded-3xl p-8">
                            <h2 className="text-2xl font-semibold mb-6">
                                Facility Features
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">

                                {[
                                    "Professional Lighting",
                                    "Indoor Court",
                                    "Changing Room",
                                    "Rest Area",
                                    "Parking Space",
                                    "Water Facility",
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#1A1D18] border border-[#2A2F25] rounded-2xl p-4"
                                    >
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="space-y-8">

                        {/* QUICK INFO */}
                        <div className="bg-[#121410] border border-[#1E2219] rounded-3xl p-8 sticky top-6">

                            <h2 className="text-2xl font-semibold mb-6">
                                Quick Information
                            </h2>

                            <div className="space-y-5">

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-[#9BA694]">
                                        <Users size={18} />
                                        Capacity
                                    </div>

                                    <p className="font-semibold">
                                        {facility.capacity} People
                                    </p>
                                </div>

                                <div className="border-t border-[#1E2219]" />

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-[#9BA694]">
                                        <Calendar size={18} />
                                        Bookings
                                    </div>

                                    <p className="font-semibold">
                                        {facility.booking_count}
                                    </p>
                                </div>

                                <div className="border-t border-[#1E2219]" />

                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3 text-[#9BA694]">
                                        <Mail size={18} />
                                        Owner
                                    </div>

                                    <p className="font-semibold text-right break-all">
                                        {facility.owner_email}
                                    </p>
                                </div>

                                <div className="border-t border-[#1E2219]" />

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-[#9BA694]">
                                        <BadgeDollarSign size={18} />
                                        Price
                                    </div>

                                    <p className="font-semibold text-[#C8F04B]">
                                        ৳{facility.price_per_hour}/hr
                                    </p>
                                </div>

                            </div>

                            <button className="cursor-pointer mt-8 w-full bg-[#C8F04B] hover:bg-[#A8CC30] transition text-black font-semibold py-4 rounded-2xl">
                                Reserve This Facility
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FacilityDetailsPage;