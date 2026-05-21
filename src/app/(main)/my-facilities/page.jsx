import { DeletFacilityAlert } from '@/components/DeleteFacilityAlert';
import EditFacilityModal from '@/components/EditFacilityModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';


const MyFacilitiesPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })


    const user = session?.user
    const userId = user?.id

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`http://localhost:5000/my-facilities/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const facilities = await res.json();


    return (
        <div className='bg-[#0A0D0A] px-6 py-10 min-h-screen'>
            <div className=" space-y-8  max-w-6xl mx-auto ">


                <div className="mb-10 text-[#E8EDE3]">
                    <p className="text-[#C8F04B] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                        Ownership
                    </p>

                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                        My Facilities
                    </h1>

                    <p className="text-gray-400 mt-3 text-sm max-w-xl">
                        Manage your sports facilities, track performance, and control bookings from one place.
                    </p>
                </div>


                {facilities.length > 0 ?

                    <div className="space-y-6">

                        {facilities.map((f, index) => (
                            <div
                                key={index}
                                className="group rounded-3xl border border-white/10 bg-[#0F1310] p-6 hover:border-[#C8F04B]/40 transition-all duration-300"
                            >

                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                                    <div>
                                        <h2 className="text-3xl font-bold text-white uppercase tracking-wide">
                                            {f.name}
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            {f.facility_type} • {f.location}
                                        </p>
                                    </div>

                                    <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
                                        ACTIVE
                                    </span>
                                </div>


                                <p className="mt-5 text-sm text-gray-300 leading-relaxed">
                                    {f.description}
                                </p>


                                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">

                                    <div className="rounded-2xl bg-black/40 border border-white/10 p-4 hover:border-[#C8F04B]/30 transition">
                                        <p className="text-xs text-gray-400">Price / Hour</p>
                                        <p className="text-2xl font-bold text-[#C8F04B] mt-1">
                                            ৳ {f.price_per_hour}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-black/40 border border-white/10 p-4 hover:border-[#C8F04B]/30 transition">
                                        <p className="text-xs text-gray-400">Capacity</p>
                                        <p className="text-2xl font-bold text-white mt-1">
                                            {f.capacity}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-black/40 border border-white/10 p-4 hover:border-[#C8F04B]/30 transition">
                                        <p className="text-xs text-gray-400">Owner Email</p>
                                        <p className="text-sm font-medium text-white break-all mt-1">
                                            {f.owner_email}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-black/40 border border-white/10 p-4 hover:border-[#C8F04B]/30 transition">
                                        <p className="text-xs text-gray-400">Type</p>
                                        <p className="text-lg font-bold text-white mt-1">
                                            {f.facility_type}
                                        </p>
                                    </div>

                                </div>


                                <div className="flex justify-center items-center sm:justify-end gap-3 mt-6">

                                    <EditFacilityModal facility={f}></EditFacilityModal>

                                    <DeletFacilityAlert facilityId={f._id}></DeletFacilityAlert>
                                </div>
                            </div>
                        ))}

                    </div>

                    :
                    <div className="flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-white/10 bg-white/5">

                        <div className="text-5xl mb-4">🏟️</div>

                        <h2 className="text-3xl font-bold text-white">
                            No facilities found
                        </h2>

                        <Link href={'/add-facility'}>
                            <button className="cursor-pointer mt-6 rounded-2xl bg-[#C8F04B] px-6 py-2 font-semibold text-black hover:scale-[1.03] transition">
                                Add Facilities
                            </button>
                        </Link>

                    </div>
                }




            </div>
        </div>
    );
};

export default MyFacilitiesPage;