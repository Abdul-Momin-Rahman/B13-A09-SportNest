import FacilityCard from '@/components/FacilityCard';

const AllFacilitiesPage = async ({ searchParams }) => {

    const params = await searchParams;

    const search = params?.search || "";
    const sports = params?.sports || "";

    console.log(search, sports)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities?search=${search}&sports=${sports}`, { cache: "no-store" });

    const facilities = await res.json();

    return (
        <div className="relative overflow-hidden bg-[#0B0D0A] pb-24 text-white">

            <div className="relative mx-auto max-w-7xl px-6">


                <form className="mt-10 flex flex-col gap-4 md:flex-row">

                    <input
                        type="text"
                        name="search"
                        placeholder="Search facility name..."
                        defaultValue={search}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 outline-none"
                    />

                    <select
                        name="sports"
                        defaultValue={sports}
                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 outline-none"
                    >
                        <option value="" className='bg-[#0B0D0A] text-white'>All Sports</option>
                        <option value="Football" className='bg-[#0B0D0A] text-white'>Football</option>
                        <option value="Badminton" className='bg-[#0B0D0A] text-white'>Badminton</option>
                        <option value="Cricket" className='bg-[#0B0D0A] text-white'>Cricket</option>
                        <option value="Basketball" className='bg-[#0B0D0A] text-white'>Basketball</option>
                        <option value="Tennis" className='bg-[#0B0D0A] text-white'>Tennis</option>
                    </select>

                    <button
                        type="submit"
                        className="cursor-pointer rounded-2xl bg-[#C8F04B] px-6 py-3 font-semibold text-black"
                    >
                        Search
                    </button>

                </form>


                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {
                        facilities.length > 0 ? (
                            facilities.map(facility => (
                                <FacilityCard
                                    facility={facility}
                                    key={facility._id}
                                />
                            ))
                        ) : (
                            <div className="min-h-[50vh] col-span-full flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-gray-300">
                                <p className="text-lg font-medium">No facilities found</p>
                                <p className="text-sm opacity-70">Try adjusting your search or sport filter</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default AllFacilitiesPage;