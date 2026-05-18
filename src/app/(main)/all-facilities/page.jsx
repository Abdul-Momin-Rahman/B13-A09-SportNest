import FacilityCard from '@/components/FacilityCard';
import React from 'react';

const AllFacilitiesPage = async () => {

    const res = await fetch(`${'http://localhost:5000'}/all-facilities`);
    const facilities = await res.json();

    return (
        <div className="relative overflow-hidden bg-[#0B0D0A] py-24 text-white">
            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {
                        facilities.map(facility => <FacilityCard facility={facility} key={facility._id}></FacilityCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllFacilitiesPage;