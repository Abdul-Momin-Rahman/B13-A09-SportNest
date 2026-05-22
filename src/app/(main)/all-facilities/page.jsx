import FacilitiesClient from '@/components/FacilitiesClient';

const AllFacilitiesPage = async () => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities`, { cache: "no-store" });

    const facilities = await res.json();

    return (
        <FacilitiesClient initialData={facilities}></FacilitiesClient>
    );
};

export default AllFacilitiesPage;