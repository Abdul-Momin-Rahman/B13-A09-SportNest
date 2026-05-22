"use client";

import { useEffect, useState } from "react";
import FacilityCard from "@/components/FacilityCard";

const FacilitiesClient = ({ initialData }) => {

    const [facilities, setFacilities] = useState(initialData);
    const [search, setSearch] = useState("");
    const [sports, setSports] = useState("");

    useEffect(() => {

        const fetchFacilities = async () => {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities?search=${search}&sports=${sports}`
            );

            const data = await res.json();

            setFacilities(data);
        };

        fetchFacilities();

    }, [search, sports]);


    return (
        <div className="relative overflow-hidden bg-[#0B0D0A] pb-24 text-white">

            <div className="mx-auto max-w-7xl px-6">


                <div className="mt-10 flex flex-col gap-4 md:flex-row">

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search facility name..."
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3"
                    />

                    <select
                        value={sports}
                        onChange={(e) => setSports(e.target.value)}
                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 outline-none"
                    >
                        <option value="" className='bg-[#0B0D0A] text-white'>All Sports</option>
                        <option value="Football" className='bg-[#0B0D0A] text-white'>Football</option>
                        <option value="Badminton" className='bg-[#0B0D0A] text-white'>Badminton</option>
                        <option value="Cricket" className='bg-[#0B0D0A] text-white'>Cricket</option>
                        <option value="Basketball" className='bg-[#0B0D0A] text-white'>Basketball</option>
                        <option value="Tennis" className='bg-[#0B0D0A] text-white'>Tennis</option>
                    </select>

                </div>


                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {facilities.length > 0 ? (
                        facilities.map(f => (
                            <FacilityCard key={f._id} facility={f} />
                        ))
                    ) : (
                        <div className="min-h-[50vh]  text-3xl font-bold col-span-full flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-gray-300">
                            No facilities found
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default FacilitiesClient;